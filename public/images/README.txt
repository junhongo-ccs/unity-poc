Place your custom images and link config here.

Supported artwork files (first match is used):
- back.webp|png|jpg|jpeg  -> Back wall center
- left.webp|png|jpg|jpeg  -> Left wall center
- right.webp|png|jpg|jpeg -> Right wall center

Optional link config:
- links.json
  {
    "back": "https://example.com/back",
    "left": "https://example.com/left",
    "right": "https://example.com/right"
  }

Notes:
- Cache-busted with a timestamp to avoid stale images while iterating.
- If a file is missing, a placeholder image (picsum) and Google URL are used.
