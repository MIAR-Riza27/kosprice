from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

from pathlib import Path
from datetime import datetime
from .model import predict_price

app = FastAPI(title="KosPrice API", version="3.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Fix: Path absolut yang benar
BASE_DIR = Path(__file__).parent.parent  # backend/
DATA_DIR = BASE_DIR / "data"
HISTORY_FILE = DATA_DIR / "history.json"
SCRAPE_DATA_FILE = DATA_DIR / "data-scrape" / "data-scrape.json"

# Pastikan folder data ada
DATA_DIR.mkdir(exist_ok=True)
(DATA_DIR / "data-scrape").mkdir(exist_ok=True)


class PredictionRequest(BaseModel):
    jenis_kos: str
    area: str
    fasilitas_kamar: list
    fasilitas_kamar_mandi: list
    fasilitas_umum: list
    fasilitas_parkir: list


class PredictionResponse(BaseModel):
    predicted_price: float
    confidence: float
    timestamp: str


@app.get("/")
async def root():
    return {"message": "KosPrice API v3.0 - Ready to predict!"}


@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}


@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    try:
        # Predict using model
        prediction, confidence = predict_price(
            jenis_kos=request.jenis_kos,
            area=request.area,
            fasilitas_kamar=request.fasilitas_kamar,
            fasilitas_kamar_mandi=request.fasilitas_kamar_mandi,
            fasilitas_umum=request.fasilitas_umum,
            fasilitas_parkir=request.fasilitas_parkir,
        )

        # Save to history
        history_entry = {
            "timestamp": datetime.now().isoformat(),
            "input": request.dict(),
            "prediction": prediction,
            "confidence": confidence,
        }

        # Load existing history
        history = []
        if HISTORY_FILE.exists():
            with open(HISTORY_FILE, "r", encoding="utf-8") as f:
                history = json.load(f)

        # Add new entry
        history.append(history_entry)

        # Keep only last 100 predictions
        history = history[-100:]

        # Save history
        with open(HISTORY_FILE, "w", encoding="utf-8") as f:
            json.dump(history, f, ensure_ascii=False, indent=2)

        return PredictionResponse(
            predicted_price=prediction,
            confidence=confidence,
            timestamp=history_entry["timestamp"],
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/history")
async def get_history():
    try:
        if not HISTORY_FILE.exists():
            return {"history": []}

        with open(HISTORY_FILE, "r", encoding="utf-8") as f:
            history = json.load(f)

        return {"history": history[-20:]}  # Return last 20 predictions

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/data/stats")
async def get_data_stats():
    try:
        if not SCRAPE_DATA_FILE.exists():
            return {"message": "No scraped data available"}

        with open(SCRAPE_DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)

        return {
            "total_records": len(data),
            "regions": list(
                set(
                    [
                        item.get("region", "unknown")
                        for item in data
                        if isinstance(item, dict)
                    ]
                )
            ),
            "last_updated": data[0].get("scraped_at", "unknown") if data else "unknown",
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
