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

## Status Model (v1.0)

Model masih dummy / baseline:

- Dataset sintetis kecil (bukan data real).
- Fitur: luas_m2, jumlah_kamar, jarak_kampus_km.
- Hanya validasi alur end‑to‑end (train → save → load → predict).
- Belum akurat untuk penggunaan nyata (jangan dipakai keputusan finansial).
- Update model: `cd backend && python train_model.py`

---

## Fitur v1.0

- Endpoint `/predict` (FastAPI) memuat `model.joblib`.
- Frontend HTML sederhana (`frontend/index.html`) kirim input & tampilkan hasil.
- CORS diaktifkan (akses via file:// atau server statis sederhana).
- Swagger UI di `/docs`.
- Cara tes frontend:
  1. Jalankan backend.
  2. Buka `frontend/index.html`.
  3. Isi form → submit → lihat prediksi.
  4. Alternatif: `cd frontend && python -m http.server 5500` lalu buka `http://localhost:5500/index.html`.

---

## Publish / Showcase

- Kode & dokumentasi di GitHub
- Demo frontend (rencana) di Vercel
- Demo backend (rencana) di Render / HuggingFace
- Portfolio page (Notion / GitHub Pages)

---

## Catatan

- `__pycache__/` otomatis, diabaikan.
- `model.joblib` = model dummy.
- Retrain: jalankan ulang `train_model.py`.
- Fitur lanjutan (histori, styling, analitik) akan ditambahkan pada versi berikut tanpa ditulis sebagai roadmap di README ini.
