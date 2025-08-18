import joblib
import os
import numpy as np
from sklearn.ensemble import RandomForestRegressor

MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.joblib")


class KosPriceModel:
    def __init__(self):
        self.model = None
        if os.path.exists(MODEL_PATH):
            try:
                self.model = joblib.load(MODEL_PATH)
            except Exception as e:
                print(f"Gagal load model: {e}")
                self.model = None

    def train(self, X, y):
        """
        Melatih model regresi dan menyimpan ke file
        X: array-like, shape (n_samples, n_features)
        y: array-like, shape (n_samples,)
        """
        self.model = RandomForestRegressor()
        self.model.fit(X, y)
        joblib.dump(self.model, MODEL_PATH)

    def predict(self, luas_m2: float, jumlah_kamar: int, jarak_kampus_km: float):
        if self.model is None:
            raise ValueError("Model belum dilatih atau belum ada file model.joblib")
        # Validasi input
        if luas_m2 <= 0:
            raise ValueError("Luas harus > 0")
        if jumlah_kamar <= 0:
            raise ValueError("Jumlah kamar harus > 0")
        if jarak_kampus_km < 0:
            raise ValueError("Jarak kampus tidak boleh negatif")
        X = np.array([[luas_m2, jumlah_kamar, jarak_kampus_km]])
        try:
            return float(self.model.predict(X)[0])
        except Exception as e:
            print(f"Gagal prediksi: {e}")
            raise
