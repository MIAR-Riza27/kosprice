# KosPrice – Prediksi Harga Kos/Kontrakan Lokal (v2.0)

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn">
</p>

> **KosPrice** adalah aplikasi web yang memprediksi harga kos/kontrakan berdasarkan input pengguna. Proyek ini menggabungkan Data Science dan Full Stack Development sebagai _showcase_ portofolio.

---

### **Tujuan Proyek**

- Membantu pengguna memperkirakan harga sewa kos/kontrakan secara otomatis.
- Menjadi contoh nyata integrasi Machine Learning dengan Web Development modern.

---

### **Tumpukan Teknologi (Tech Stack)**

| Kategori             | Teknologi & Tools                                     |
| -------------------- | ----------------------------------------------------- |
| **Frontend**         | `React.js`, `TailwindCSS`                             |
| **Backend**          | `FastAPI`, `Uvicorn`                                  |
| **Machine Learning** | `Scikit-Learn`, `Pandas`, `Joblib`                    |
| **Database**         | File `JSON` (saat ini), `PostgreSQL` (rencana)        |
| **Deployment**       | `Vercel` (Frontend), `Render`/`HuggingFace` (Backend) |

---

### **Cara Menjalankan Proyek**

<details>
<summary><strong>Klik untuk melihat panduan instalasi lokal</strong></summary>

1.  **Menjalankan API Backend**

    - Jalankan server FastAPI dari direktori root proyek:

    ```bash
    uvicorn backend.model.main:app --reload
    ```

    - Buka browser di [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) untuk melihat Swagger UI.

2.  **Menjalankan Frontend (React)**
    - Buka terminal baru, lalu jalankan:
    ```bash
    cd frontend/react-app
    npm install
    npm start
    ```
    - Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

</details>

---

### **Fitur Unggulan v2.0**

- **UI Modern**: Frontend dibangun ulang sepenuhnya menggunakan **React** dan **TailwindCSS**.
- **Komponen Lengkap**: Termasuk Navbar, Sidebar, Toast, Dark Mode, dan Breadcrumbs.
- **Navigasi SPA**: Pengalaman pengguna yang mulus antar halaman (Home, Predict, History, About) tanpa _reload_.
- **Backend Cepat**: API tetap menggunakan FastAPI untuk performa tinggi dan responsivitas.
- **Histori Prediksi**: Fitur untuk melihat riwayat prediksi terintegrasi dengan UI baru.

---

### **Status Model Machine Learning**

Model saat ini masih bersifat **baseline** dan bertujuan untuk validasi alur:

- Menggunakan dataset sintetis kecil (bukan data riil).
- Fitur yang digunakan: `luas_m2`, `jumlah_kamar`, `jarak_kampus_km`.
- **Belum akurat** untuk pengambilan keputusan finansial.
- Untuk melatih ulang model, jalankan: `cd backend/model && python train_model.py`

---

### **Rencana Publikasi & Showcase**

- **Kode & Dokumentasi**: GitHub
- **Demo Frontend**: Vercel
- **Demo Backend**: Render / HuggingFace Space
- **Halaman Portofolio**: Notion / GitHub Pages

---

### **Catatan Tambahan**

- Direktori `__pycache__/` dibuat otomatis oleh Python dan dapat diabaikan.
- File model `model.joblib` adalah model dummy yang tersimpan di `backend/model/`.
- Histori prediksi disimpan di `backend/.data/history.json` dan akan otomatis dimuat saat aplikasi dijalankan.
- Fitur lanjutan dan perbaikan model akan ditambahkan pada versi berikutnya.
