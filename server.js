import express from "express";
import http from "http";
import cors from "cors";
import { WebSocketServer } from "ws";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors({ origin: process.env.ALLOW_ORIGIN?.split(",") || "*" }));
app.use(express.static("public"));       // テスト用ページやWebGLビルドを配信
app.get("/health", (_, res) => res.send("ok"));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const ROOM = "gallery";
const MAX_CLIENTS = 5;
const clients = new Map(); // id -> { ws, state }

function broadcast(obj, exceptId = null) {
  const msg = JSON.stringify(obj);
  for (const [id, c] of clients) {
    if (id === exceptId) continue;
    if (c.ws.readyState === 1) c.ws.send(msg);
  }
}

wss.on("connection", (ws, req) => {
  // 5人制限
  const current = [...clients.values()].filter(c => c.room === ROOM).length;
  if (current >= MAX_CLIENTS) {
    ws.send(JSON.stringify({ type: "full", max: MAX_CLIENTS }));
    return ws.close(1000, "room full");
  }

  const id = uuidv4();
  clients.set(id, { ws, room: ROOM, state: null, lastSeen: Date.now() });

  // 既存プレイヤーの状態を初期送信
  const snapshot = {};
  for (const [pid, c] of clients) if (pid !== id && c.state) snapshot[pid] = c.state;
  ws.send(JSON.stringify({ type: "init", players: snapshot, id }));

  // 参加通知
  broadcast({ type: "join", id }, id);

  ws.on("message", (data) => {
    try {
      const msg = JSON.parse(data.toString());
      const entry = clients.get(id);
      if (!entry) return;

      // 心跳
      if (msg.type === "ping") {
        entry.lastSeen = Date.now();
        ws.send(JSON.stringify({ type: "pong", t: Date.now() }));
        return;
      }

      // 位置・回転などの状態
      if (msg.type === "state") {
        // { pos:[x,y,z], rot:[x,y,z] }
        entry.state = msg.state;
        entry.lastSeen = Date.now();
        broadcast({ type: "state", id, state: msg.state }, id);
      }
    } catch {}
  });

  ws.on("close", () => {
    clients.delete(id);
    broadcast({ type: "leave", id });
  });
});

// 死活監視（ゴースト掃除）
setInterval(() => {
  const now = Date.now();
  for (const [id, c] of clients) {
    if (now - c.lastSeen > 15000) { // 15s
      try { c.ws.terminate(); } catch {}
      clients.delete(id);
      broadcast({ type: "leave", id });
    }
  }
}, 5000);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log("listening on", port));
