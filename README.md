# KosPrice – Prediksi Harga Kos/Kontrakan Lokal (v3.0)

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn">
</p>

> **KosPrice** adalah aplikasi web end-to-end yang memprediksi harga kos/kontrakan berdasarkan data real dari web scraping. Proyek ini menggabungkan Web Scraping, Machine Learning, dan Full Stack Development sebagai _showcase_ portofolio komprehensif.

---

### **Tujuan Proyek**

- **Prediksi Harga Real**: Membantu pengguna memperkirakan harga sewa kos berdasarkan fasilitas dan lokasi menggunakan data nyata.
- **End-to-End Pipeline**: Mendemonstrasikan alur lengkap dari data collection → preprocessing → modeling → deployment.
- **Portofolio Showcase**: Membuktikan kemampuan Full Stack Development + Data Science dalam satu project.

---

### **Arsitektur Sistem v3.0**

```
┌─────────────────────────────────────────────────────────────┐
│                    KosPrice v3.0 Architecture               │
├─────────────────────────────────────────────────────────────┤
│  Data Collection (NEW!)                                     │
│  ├── Playwright Web Scraper                                 │
│  ├── Smart Categorization (Fuzzy Matching)                  │
│  └── Multi-Region Data Pipeline                             │
├─────────────────────────────────────────────────────────────┤
│  Machine Learning                                           │
│  ├── Real Data Training                                     │
│  ├── Feature Engineering                                    │
│  └── Model Persistence (joblib)                             │
├─────────────────────────────────────────────────────────────┤
│  Backend API                                                │
│  ├── FastAPI Server                                         │
│  ├── Prediction Endpoints                                   │
│  └── History Management                                     │
├─────────────────────────────────────────────────────────────┤
│  Frontend                                                   │
│  ├── React.js SPA                                           │
│  ├── Modern UI Components                                   │
│  └── Responsive Design                                      │
└─────────────────────────────────────────────────────────────┘
```

---

### **Tumpukan Teknologi (Tech Stack)**

| Kategori             | Teknologi & Tools                                 |
| -------------------- | ------------------------------------------------- |
| **Data Collection**  | `Playwright`, `Python`, `Fuzzy Matching`          |
| **Frontend**         | `React.js`, `TailwindCSS`                         |
| **Backend**          | `FastAPI`, `Uvicorn`                              |
| **Machine Learning** | `Scikit-Learn`, `Pandas`, `Joblib`                |
| **Data Storage**     | `JSON` files, `PostgreSQL` (planned)              |
| **Deployment**       | `Vercel` (Frontend), `Render`/`Railway` (Backend) |

---

### **Fitur Unggulan v3.0**

#### **Data Collection Pipeline**

- **Web Scraping**: Otomatis mengumpulkan data kos dari platform populer
- **Smart Categorization**: AI-powered categorization untuk fasilitas kos
- **Multi-Region Support**: Scraping data dari 7+ kota besar Indonesia
- **Real-time Data**: Data selalu fresh dan up-to-date

#### **Advanced Machine Learning**

- **Real Dataset**: Model dilatih dengan data scraping nyata (1000+ samples)
- **Feature Engineering**: Ekstraksi fitur cerdas dari fasilitas dan lokasi
- **Categorized Features**: Fasilitas dikategorikan (kamar, kamar mandi, umum, parkir)
- **Location Intelligence**: Analisis jarak ke landmarks penting

#### **Modern Frontend**

- **React SPA**: Single Page Application dengan routing modern
- **Component Library**: 20+ reusable components
- **Responsive Design**: Mobile-first approach
- **Dark Mode Support**: Theme switching capability

#### **High-Performance Backend**

- **FastAPI**: Async endpoints untuk performa tinggi
- **Auto Documentation**: Swagger UI terintegrasi
- **History Tracking**: Persistent prediction history
- **Error Handling**: Comprehensive error management

---

### **Struktur Project**

```
kos-price/
├── frontend/react-app/          # React frontend
│   ├── src/components/          # Reusable UI components
│   ├── src/pages/              # Page components
│   └── src/utils/              # Utilities & API calls
├── backend/
│   ├── scrape/                 # Web scraping module
│   │   ├── scrape.py          # Main scraper with Playwright
│   │   └── regions.py         # Target regions config
│   ├── model/                  # ML model & API
│   │   ├── main.py            # FastAPI server
│   │   ├── model.py           # ML model logic
│   │   └── train_model.py     # Model training script
│   └── data/                   # Data storage
│       └── data-scrape/        # Scraped data
└── README.md
```

---

### **Cara Menjalankan Proyek**

<details>
<summary><strong>Panduan Setup Lengkap</strong></summary>

#### **1. Prerequisites**

```bash
# Install Python 3.8+
python --version

# Install Node.js 16+
node --version
npm --version
```

#### **2. Clone & Setup**

```bash
git clone <repository-url>
cd kos-price
```

#### **3. Backend Setup**

```bash
# Install Python dependencies
pip install fastapi uvicorn playwright scikit-learn pandas

# Install Playwright browsers
playwright install

# Run web scraper (optional - untuk data fresh)
cd backend/scrape
python scrape.py

# Train model dengan data baru
cd ../model
python train_model.py

# Start FastAPI server
cd ../..
uvicorn backend.model.main:app --reload
```

#### **4. Frontend Setup**

```bash
cd frontend/react-app
npm install
npm start
```

#### **5. Access Applications**

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://127.0.0.1:8000](http://127.0.0.1:8000)
- **API Docs**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

</details>

---

### **Data Pipeline & Model**

#### **Web Scraping Process**

1. **Target Platform**: Scraping dari platform kos terpopuler
2. **Multi-Region**: 7 kota besar (Bandung, Semarang, Surabaya, dll)
3. **Smart Extraction**: Otomatis kategorisasi fasilitas menggunakan fuzzy matching
4. **Data Quality**: Error handling dan data validation

#### **Machine Learning Pipeline**

1. **Feature Engineering**:
   - Categorical encoding untuk fasilitas
   - Location-based features
   - Price normalization
2. **Model Training**: Scikit-learn dengan real dataset
3. **Model Validation**: Cross-validation dan performance metrics
4. **Deployment**: Model persistence dengan joblib

---

### **API Endpoints**

| Method | Endpoint   | Description                          |
| ------ | ---------- | ------------------------------------ |
| `POST` | `/predict` | Prediksi harga kos berdasarkan input |
| `GET`  | `/history` | Ambil riwayat prediksi               |
| `GET`  | `/health`  | Health check API                     |
| `GET`  | `/docs`    | Interactive API documentation        |

---

### **Roadmap & Development**

#### **Completed (v3.0)**

- [x] Web scraping pipeline dengan Playwright
- [x] Smart facility categorization
- [x] Real data model training
- [x] Modern React frontend
- [x] FastAPI backend dengan documentation

#### **In Progress**

- [ ] Model performance optimization
- [ ] More sophisticated feature engineering
- [ ] Database integration (PostgreSQL)
- [ ] Authentication & user management

---

### **Rencana Publikasi & Showcase**

- **Kode & Dokumentasi**: GitHub
- **Demo Frontend**: Vercel
- **Demo Backend**: Render / HuggingFace Space
- **Halaman Portofolio**: Notion / GitHub Pages

---

### **Kontribusi & Pengembangan**

Project ini terbuka untuk kontribusi! Areas yang bisa dikembangkan:

1. **Data Science**: Improve model accuracy, feature engineering
2. **Frontend**: UI/UX improvements, new components
3. **Backend**: Performance optimization, caching
4. **DevOps**: CI/CD pipeline, monitoring, scaling

---

### **Lisensi & Credits**

- **License**: MIT License
- **Author**: Muhammad Ibnu Alvariza - @MIAR-Riza27 - https://github.com/MIAR-Riza27
- **LinkedIn**: https://www.linkedin.com/in/muhammadibnualvariza/
- **Portfolio**: Coming soon (3 projects milestone)
- **Tech Stack**: React, FastAPI, Playwright, Scikit-learn
- **Data Source**: Web scraping (for educational purposes)

---

> **Disclaimer**: Model prediksi ini dibuat untuk tujuan demonstrasi dan pembelajaran. Untuk keputusan finansial yang sesungguhnya, konsultasikan dengan ahli properti.
