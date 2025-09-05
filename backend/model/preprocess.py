# Struktur fungsi yang perlu dibuat:
def load_raw_data(file_path):
    """Load data dari data-scrape.json"""
    pass


def clean_data(df):
    """
    - Hapus duplikat berdasarkan nama_kos + alamat
    - Handle missing values di harga, rating
    - Convert harga dari string ke numeric
    - Filter outliers harga (IQR method)
    """
    pass


def encode_categorical_features(df):
    """
    - LabelEncoder untuk region, jenis_kos
    - One-hot encoding untuk fasilitas (kamar, kamar_mandi, umum, parkir)
    """
    pass


def feature_engineering(df):
    """
    - Hitung jumlah fasilitas per kategori
    - Extract jarak ke landmark terdekat
    - Buat fitur rating_score, review_count numeric
    - Normalisasi harga per region
    """
    pass
