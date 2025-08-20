from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from model import KosPriceModel
import json
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = KosPriceModel()

# Direktori data tersembunyi & migrasi file lama
DATA_DIR = os.path.join(os.path.dirname(__file__), ".data")
os.makedirs(DATA_DIR, exist_ok=True)

OLD_HISTORY_FILE = os.path.join(os.path.dirname(__file__), "history.json")
HISTORY_FILE = os.path.join(DATA_DIR, "history.json")

# Migrasi satu kali jika file lama ada dan file baru belum dibuat
if os.path.exists(OLD_HISTORY_FILE) and not os.path.exists(HISTORY_FILE):
    try:
        os.replace(OLD_HISTORY_FILE, HISTORY_FILE)
        print("Migrated history.json to .data/")
    except Exception as _e:
        print(f"Gagal migrasi history.json: {_e}")


class KosInput(BaseModel):
    luas_m2: float
    jumlah_kamar: int
    jarak_kampus_km: float


def save_to_history(input_data, prediction):
    """Menyimpan prediksi ke histori (otomatis di .data)."""
    history_entry = {
        "timestamp": datetime.now().isoformat(),
        "input": {
            "luas_m2": input_data.luas_m2,
            "jumlah_kamar": input_data.jumlah_kamar,
            "jarak_kampus_km": input_data.jarak_kampus_km,
        },
        "prediksi_harga": prediction,
    }

    # Baca histori yang ada
    history = []
    if os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, "r") as f:
                history = json.load(f)
        except Exception:
            history = []

    # Tambah entry baru
    history.append(history_entry)

    # Simpan kembali (batasi 100 entry terakhir)
    history = history[-100:]
    with open(HISTORY_FILE, "w") as f:
        json.dump(history, f, indent=2)


@app.post("/predict")
def predict_price(data: KosInput):
    try:
        result = model.predict(
            luas_m2=data.luas_m2,
            jumlah_kamar=data.jumlah_kamar,
            jarak_kampus_km=data.jarak_kampus_km,
        )

        # Simpan ke histori
        save_to_history(data, result)

        return {"prediksi_harga": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/history")
def get_history():
    """Mengambil histori prediksi"""
    if not os.path.exists(HISTORY_FILE):
        return {"history": []}

    try:
        with open(HISTORY_FILE, "r") as f:
            history = json.load(f)
        # Urutkan berdasarkan timestamp terbaru
        history.reverse()
        return {"history": history}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading history: {str(e)}")
