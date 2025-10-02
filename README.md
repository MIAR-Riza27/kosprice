# KosPrice – Prediksi Harga Kos/Kontrakan Lokal (v4.0)

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI">
</p>

> **KosPrice** adalah aplikasi web end-to-end yang memprediksi harga kos/kontrakan berdasarkan data real dari web scraping. Proyek ini menggabungkan Web Scraping, Machine Learning, dan Full Stack Development sebagai _showcase_ portofolio komprehensif.

---

### **Tujuan Proyek**

- **Prediksi Harga Real**: Membantu pengguna memperkirakan harga sewa kos berdasarkan fasilitas dan lokasi menggunakan data nyata.
- **End-to-End Pipeline**: Mendemonstrasikan alur lengkap dari data collection → preprocessing → modeling → deployment.
- **Portofolio Showcase**: Membuktikan kemampuan Full Stack Development + Data Science dalam satu project.

---
### **Update, Sekarang pakai Framework Next.js!!**

> Web sudah beralih dari hanya menggunakan `REACT.js`, sekarang menggunakan framework `Next.js`
>
> Kami sekaligus akan **merombak** total design web, dengan layout yang lebih terstruktur serta design yang lebih **ramah** di mata
>
> Karena dalam masa peralihan, model **Machine Learning** & **Scraper** belum tersedia. Secepatnya akan ada update, kami usahakan semaksimal munkin.

### **Arsitektur Sistem v4.0**

```
Frontend: Next.js (TypeScript)
├── app/
│   ├── page.tsx (Landing)
│   ├── about/page.tsx
│   ├── history/page.tsx
│   └── predict/page.tsx
├── components/ (Reusable UI)
│   ├── Navbar.tsx, Footer.tsx, Card.tsx, Button.tsx
├── public/ (Assets)
└── globals.css, layout.tsx

Backend & ML: (Coming soon)
├── FastAPI (Python)
├── Scraper & Model (Not yet integrated)
└── API endpoints (planned)
```

---

### **Tumpukan Teknologi (Tech Stack)**

| Kategori             | Teknologi & Tools                                 |
| -------------------- | ------------------------------------------------- |
| Frontend             | Next.js, Tailwind CSS, TypeScript                 |
| Backend (planned)    | FastAPI, Python                                   |
| Data Science (plan)  | Scikit-learn, Playwright (scraping)               |
| Deployment           | Vercel, Docker (plan)                             |

---

### **Fitur Unggulan v4.0**

- UI modern dengan Next.js & Tailwind CSS
- Routing terstruktur: /about, /history, /predict
- Komponen reusable: Navbar, Footer, Card, Button
- Desain responsif dan ramah pengguna
- **Catatan:** Fitur prediksi harga & scraping belum tersedia, akan diintegrasikan pada update berikutnya.

---

### **Struktur Project (v4.0 - Next.js Edition)**

```
kosprice/
├── app/
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── history/page.tsx
│   └── predict/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   └── Button.tsx
├── public/
│   └── *.svg
├── globals.css
├── layout.tsx
├── next.config.ts
├── package.json
└── ...
```

---

### **Cara Menjalankan Proyek**

1. Clone repo: 
```
git clone https://github.com/MIAR-Riza27/kosprice.git
```
2. Install dependencies: 
```
npm install
```
3. Jalankan development server:
```
npm run dev
```
1. Buka di browser: 
```
http://localhost:3000
```

---

### **Roadmap & Development**

- [x] Migrasi ke Next.js
- [x] Redesign UI & struktur folder
- [ ] Integrasi backend FastAPI
- [ ] Implementasi web scraping & ML model
- [ ] API prediksi harga kos

---

### **Kontribusi & Pengembangan**

Project ini terbuka untuk kontribusi! Area pengembangan:

1. **Frontend**: UI/UX, komponen baru
2. **Backend**: API, integrasi ML
3. **Data Science**: Model, scraping
4. **DevOps**: CI/CD, deployment

---

### **Lisensi & Credits**

- **License**: MIT License
- **Author**: Muhammad Ibnu Alvariza - [@MIAR-Riza27](https://github.com/MIAR-Riza27)
- **LinkedIn**: https://www.linkedin.com/in/muhammadibnualvariza/
- **Portfolio**: Coming soon (3 projects milestone)
- **Tech Stack**: Next.js, FastAPI, Playwright, Scikit-learn
- **Data Source**: Web scraping (for educational purposes)

---

> **Catatan Migrasi:**
> Proyek telah bermigrasi ke Next.js untuk frontend. Struktur lama React SPA telah dihapus. Jika Anda menemukan referensi ke folder lama, silakan gunakan struktur terbaru di atas.

> **Disclaimer**: Model prediksi ini dibuat untuk tujuan demonstrasi dan pembelajaran. Untuk keputusan finansial yang sesungguhnya, konsultasikan dengan ahli properti.
