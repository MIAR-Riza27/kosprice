# KosPrice – Prediksi Harga Kos/Kontrakan Lokal

## Deskripsi

KosPrice adalah aplikasi web yang memprediksi harga kos/kontrakan berdasarkan input user (lokasi, luas, jumlah kamar, dll). Proyek ini menggabungkan Data Science dan Full Stack Development sebagai showcase portofolio.

---

## Tujuan Proyek

- Membantu user memperkirakan harga kos/kontrakan secara otomatis.
- Menjadi contoh integrasi Machine Learning dan Web Development.

---

## Tools & Teknologi

**Frontend:**

- React.js + TailwindCSS (UI/UX)
- Vercel (deploy)

**Backend:**

- FastAPI (Python, REST API)
- Uvicorn (server)
- Docker (opsional)

**Database:**

- PostgreSQL (data inti)
- MongoDB (patch v2.0, data fleksibel)

**Machine Learning:**

- Pandas, Numpy (EDA)
- Scikit-Learn, XGBoost (regresi)
- Joblib/Pickle (save model)

**Deployment:**

- Frontend: Vercel
- Backend: Render / HuggingFace Space
- Database: Supabase / Railway / Render

---

## Cara Menjalankan

1. **Training Model**

   - Jalankan script berikut di terminal:
     ```
     cd backend
     python train_model.py
     ```
   - Model akan tersimpan di `model.joblib`.

2. **Menjalankan API Backend**

   - Jalankan server FastAPI:
     ```
     cd backend
     uvicorn main:app --reload
     ```
   - Buka browser di [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) untuk Swagger UI.

3. **Tes Prediksi**
   - Kirim request POST ke endpoint `/predict` dengan contoh data:
     ```json
     {
       "luas_m2": 18,
       "jumlah_kamar": 1,
       "jarak_kampus_km": 0.8
     }
     ```
   - API akan mengembalikan prediksi harga kos.

---

## Fitur Baru v1.0

- **Frontend HTML sederhana** untuk pengetesan prediksi harga kos.
  - File: `frontend/index.html`
  - User bisa input data (luas, jumlah kamar, jarak kampus) dan submit form.
  - Hasil prediksi harga langsung muncul di halaman.
- **Integrasi CORS di backend** agar frontend lokal bisa akses API tanpa error.
- **Cara tes frontend:**
  1. Jalankan backend FastAPI seperti biasa.
  2. Buka file `frontend/index.html` di browser.
  3. Isi form, submit, dan lihat hasil prediksi.
  4. Alternatif: Jalankan web server lokal di folder frontend dengan `python -m http.server` lalu akses `http://localhost:8000/index.html`.

---

## Roadmap Versi

- **v1.0**: SQL only, core prediksi berjalan
- **v1.1**: histori prediksi
- **v2.0**: patch fasilitas dengan NoSQL
- **v3.0**: analitik harga rata-rata per kota + visualisasi tren

---

## Publish / Showcase

- Kode & dokumentasi di GitHub
- Demo frontend di Vercel
- Demo backend di Render/HuggingFace
- Portfolio page (Notion/GitHub Pages)

---

## Catatan

- Folder `__pycache__/` otomatis dari Python, abaikan (masukkan ke `.gitignore`).
- File `model.joblib` adalah hasil training, dibaca oleh backend untuk prediksi.
- Untuk update model, jalankan ulang `train_model.py` dengan data baru.
