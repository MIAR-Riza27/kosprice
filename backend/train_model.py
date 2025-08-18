import numpy as np
from model import KosPriceModel

# Dataset dummy (bisa diganti dengan data asli nanti)
# Format: [luas_m2, jumlah_kamar, jarak_kampus_km]
X = np.array(
    [
        [12, 1, 0.5],
        [20, 2, 1.0],
        [15, 1, 0.2],
        [25, 2, 2.0],
        [30, 3, 1.5],
    ]
)
y = np.array([800000, 1500000, 1000000, 2000000, 2500000])  # harga kos (contoh)

model = KosPriceModel()
model.train(X, y)

print("Model berhasil dilatih dan disimpan ke model.joblib")
