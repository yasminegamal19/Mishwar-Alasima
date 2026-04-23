# مشوار العاصمة — Create React App

موقع لاندنج بـ React (Create React App) لتطبيق حجز باصات العاصمة الإدارية الجديدة.

## التشغيل المحلي

```bash
npm install
npm start
```

افتحي المتصفح على [http://localhost:3000](http://localhost:3000).

## بناء نسخة الإنتاج

```bash
npm run build
```

## التقنيات المستخدمة

- **React 18** عبر Create React App (`react-scripts`).
- **React Router v6** للراوتنج (`/`, `/routes`, `/about`, `/contact`).
- **Tailwind CSS v3** للتصميم مع نظام ألوان OKLCH.
- **Lucide React** للأيقونات.
- خطوط **Cairo** و **Tajawal** من Google Fonts.

## هيكل المشروع

```
mishwar-cra/
├── public/
│   └── index.html
├── src/
│   ├── assets/           ← الصور والشعار
│   ├── components/       ← Header, Footer, SearchForm
│   ├── pages/            ← HomePage, RoutesPage, AboutPage, ContactPage, NotFound
│   ├── App.js            ← الراوتنج
│   ├── index.js          ← نقطة الدخول
│   └── index.css         ← Tailwind + متغيرات الألوان
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ملاحظات مهمة

- المشروع يعمل بـ `react-scripts` (Create React App) وليس Vite.
- جميع الصفحات بدعم RTL كامل للعربية.
- يمكنك تخصيص الألوان من ملف `src/index.css` (متغيرات `--primary`, `--accent` ...).
