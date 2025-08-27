import React, { useState } from 'react';
import { useToast } from '../../utils/useToast';
import Card from '../ui/Card';
import Button from '../ui/Button';
import FormInput from '../ui/FormInput';
import Loader from '../ui/Loader';
import Alert from '../feedback/Alert';

const PredictPage = () => {
  const [formData, setFormData] = useState({
    luas_m2: '',
    jumlah_kamar: '',
    jarak_kampus_km: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { success, error: showError } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          luas_m2: parseFloat(formData.luas_m2),
          jumlah_kamar: parseInt(formData.jumlah_kamar),
          jarak_kampus_km: parseFloat(formData.jarak_kampus_km)
        })
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data);
      
      success(
        'Prediksi Berhasil!',
        `Estimasi harga: Rp ${data.prediksi_harga.toLocaleString('id-ID')}`
      );
      
    } catch (err) {
      console.error('Fetch error:', err);
      
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        const errorMsg = 'Tidak dapat terhubung ke server. Pastikan backend sudah berjalan di http://127.0.0.1:8000';
        setError(errorMsg);
        showError('Koneksi Gagal', errorMsg);
      } else {
        const errorMsg = `Error: ${err.message}`;
        setError(errorMsg);
        showError('Terjadi Kesalahan', err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Prediksi Harga Kos
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Masukkan detail kos/kontrakan untuk mendapatkan estimasi harga menggunakan AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Prediksi */}
          <Card title="Input Data Kos">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Luas Kamar (m²)"
                type="number"
                name="luas_m2"
                value={formData.luas_m2}
                onChange={handleChange}
                step="0.1"
                placeholder="Contoh: 12.5"
                required
              />

              <FormInput
                label="Jumlah Kamar"
                type="number"
                name="jumlah_kamar"
                value={formData.jumlah_kamar}
                onChange={handleChange}
                min="1"
                placeholder="Contoh: 1"
                required
              />

              <FormInput
                label="Jarak ke Kampus (km)"
                type="number"
                name="jarak_kampus_km"
                value={formData.jarak_kampus_km}
                onChange={handleChange}
                step="0.1"
                placeholder="Contoh: 2.5"
                required
              />

              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                size="full"
                className="mt-6"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Loader />
                    <span className="ml-2">Memproses...</span>
                  </div>
                ) : (
                  'Prediksi Harga'
                )}
              </Button>
            </form>
          </Card>

          {/* Hasil Prediksi */}
          <Card title="Hasil Prediksi">
            {result && (
              <Alert
                type="success"
                title="Prediksi Berhasil"
                message={
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      Rp {result.prediksi_harga.toLocaleString('id-ID')}
                    </div>
                    <p className="text-green-700 text-sm">
                      Estimasi harga kos berdasarkan data yang Anda masukkan
                    </p>
                  </div>
                }
              />
            )}

            {error && (
              <Alert
                type="error"
                title="Terjadi Kesalahan"
                message={error}
              />
            )}

            {!result && !error && !loading && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 opacity-50">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500">Isi form di sebelah kiri untuk mendapatkan prediksi harga</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PredictPage;