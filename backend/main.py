from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from model import KosPriceModel

app = FastAPI()
model = KosPriceModel()

class KosInput(BaseModel):
    luas_m2: float
    jumlah_kamar: int
    jarak_kampus_km: float

@app.post("/predict")
def predict_price(data: KosInput):
    try:
        result = model.predict(
            luas_m2=data.luas_m2,
            jumlah_kamar=data.jumlah_kamar,
            jarak_kampus_km=data.jarak_kampus_km
        )
        return {"prediksi_harga": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
