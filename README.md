# ☀️ Sun Solutions – Landing Page

Landing page cho Sun Solutions, build bằng Node.js + Express.

---

## 📁 Cấu trúc dự án

```
sunsolutions/
├── server.js              # Express server
├── package.json
├── .gitignore
├── README.md
│
├── views/
│   ├── index.html         # Landing page chính
│   └── 404.html           # Trang 404
│
└── public/
    ├── css/
    │   └── styles.css     # Toàn bộ CSS + animations
    ├── js/
    │   └── main.js        # Cursor, scroll, counter, testimonials
    └── images/            # Logo, ảnh thực tế để vào đây
```

---

## 🚀 Chạy local

```bash
npm install
npm run dev        # dev mode (nodemon)
npm start          # production
```

Mở: **http://localhost:3000**

---

## ☁️ Deploy

### Railway (khuyên dùng – miễn phí)
1. Push code lên GitHub
2. Vào [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Railway tự detect Node.js và deploy

### Render
1. Push lên GitHub
2. [render.com](https://render.com) → New Web Service → Connect repo
   - Build Command: `npm install`
   - Start Command: `npm start`

### VPS + PM2
```bash
npm install -g pm2
pm2 start server.js --name sunsolutions
pm2 startup && pm2 save
```

### Docker
```bash
docker build -t sunsolutions .
docker run -p 3000:3000 sunsolutions
```

---

## ⚙️ Biến môi trường

| Biến   | Mặc định | Mô tả             |
|--------|----------|-------------------|
| `PORT` | `3000`   | Port server chạy  |

---

## 🛠 Tuỳ chỉnh

| File | Nội dung |
|------|----------|
| `views/index.html` | Text, số liệu, section nội dung |
| `public/css/styles.css` | Màu (`--sun-orange`, `--sun-amber`...), font, layout |
| `public/js/main.js` | Testimonials data, animations |
| `public/images/` | Logo, ảnh thực tế |
