# 🎨 3Dギャラリー カラーカスタマイズガイド

## 概要
`gallery.html`の上部にある`COLORS`オブジェクトを編集することで、ギャラリーの色を簡単にカスタマイズできます。

## 床の三角印について
現在の床は`THREE.PlaneGeometry(15, 15)`という単純な正方形平面です。Three.jsでは内部的にプレーンジオメトリを2つの三角形で構成するため、ライティングや描画の条件によって三角形の境界線が見える場合があります。これは正常な動作です。

## カラー設定

### 基本的な使い方
```javascript
const COLORS = {
  background: 0x87ceeb,    // 16進数カラーコード
  // ...
};
```

### 利用可能な色設定

#### 環境色
- `background`: 背景・空の色
- `fog`: フォグ（遠景のぼかし）色

#### ライティング
- `ambientLight`: 環境光の色
- `directionalLight`: 指向性ライトの色

#### 建物構造
- `floor`: 床の色
- `wall`: 壁の色  
- `ceiling`: 天井の色
- `frame`: 絵画フレームの色

#### UI要素
- `textPanel`: 操作説明パネルの背景色

## カラーコード例

### テーマ別プリセット

#### 🌅 暖かいギャラリー
```javascript
const COLORS = {
  background: 0xfff8dc,      // コーンシルクベージュ
  fog: 0xfff8dc,
  ambientLight: 0xffffcc,    // 暖色系ライト
  directionalLight: 0xfff8dc,
  floor: 0xdaa520,           // ゴールデンロッド
  wall: 0xfffaf0,            // フローラルホワイト
  ceiling: 0xfaebd7,         // アンティークホワイト
  frame: 0x8b4513,           // サドルブラウン
  textPanel: 0x2f1b14,       // 濃いブラウン
};
```

#### 🌃 モダンダークギャラリー
```javascript
const COLORS = {
  background: 0x1a1a1a,      // 濃いグレー
  fog: 0x1a1a1a,
  ambientLight: 0x404040,    // 暗めの環境光
  directionalLight: 0x808080, // グレーライト
  floor: 0x2d2d2d,           // 濃いグレー床
  wall: 0x3a3a3a,            // ダークグレー壁
  ceiling: 0x1f1f1f,         // ほぼ黒天井
  frame: 0xc0c0c0,           // シルバーフレーム
  textPanel: 0x0a0a0a,       // ほぼ黒パネル
};
```

#### 🎨 アートギャラリー
```javascript
const COLORS = {
  background: 0xf5f5f5,      // ホワイトスモーク
  fog: 0xf5f5f5,
  ambientLight: 0xffffff,    // 純白ライト
  directionalLight: 0xf0f8ff, // アリスブルー
  floor: 0x708090,           // スレートグレー
  wall: 0xffffffff,          // 純白壁
  ceiling: 0xf8f8ff,         // ゴーストホワイト  
  frame: 0x191970,           // ミッドナイトブルー
  textPanel: 0x2f4f4f,       // ダークスレートグレー
};
```

#### 🌊 海辺のギャラリー
```javascript
const COLORS = {
  background: 0x87ceeb,      // スカイブルー
  fog: 0x87ceeb,
  ambientLight: 0xe0ffff,    // ライトシアン
  directionalLight: 0xfffaf0, // フローラルホワイト
  floor: 0xf5deb3,           // ウィート（砂色）
  wall: 0xf0f8ff,            // アリスブルー
  ceiling: 0x87cefa,         // ライトスカイブルー
  frame: 0x2e8b57,           // シーグリーン
  textPanel: 0x2f4f4f,       // ダークスレートグレー
};
```

## 色の選び方のコツ

1. **背景とフォグは同じ色**にすると自然な遠近感が得られます
2. **壁と床のコントラスト**を適度に保つと空間認識が良くなります  
3. **フレームは壁より濃い色**にすると絵画が際立ちます
4. **ライトの色温度**を統一すると雰囲気が向上します

## 16進数カラーコードツール

- [Coolors.co](https://coolors.co/) - カラーパレット生成
- [Adobe Color](https://color.adobe.com/) - カラーホイール
- [HTML Color Codes](https://htmlcolorcodes.com/) - カラーピッカー

## 変更の適用

1. `gallery.html`の`COLORS`オブジェクトを編集
2. ブラウザでページをリロード
3. 変更が即座に反映されます

色の変更は即座に反映されるため、リアルタイムで調整しながら理想的な雰囲気を作ることができます。