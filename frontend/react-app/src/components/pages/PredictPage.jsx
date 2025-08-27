import React, { useState } from 'react';
import { useToast } from '../../utils/useToast';
import { api } from '../../utils/api';
import { validatePredictionInput, parseFormData, formatCurrency, getErrorMessage } from '../../utils/helpers';
import { SUCCESS_MESSAGES, TOAST_TYPES } from '../../utils/constants'; // Fix: Remove ERROR_MESSAGES
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
  const [validationErrors, setValidationErrors] = useState({});
  
  const { success, error: showError } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    setValidationErrors({});

    // Parse and validate data
    const parsedData = parseFormData(formData);
    const validation = validatePredictionInput(parsedData);
    
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      setLoading(false);
      showError('Validasi Gagal', 'Mohon periksa data yang dimasukkan');
      return;
    }

    try {
      const response = await api.predict(parsedData);
      
      if (response.success) {
        setResult(response.data);
        success(
          SUCCESS_MESSAGES.PREDICTION_SUCCESS,
          `Estimasi harga: ${formatCurrency(response.data.prediksi_harga)}`
        );
      }
      
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      setError(errorMessage);
      showError('Prediksi Gagal', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            Prediksi Harga Kos
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
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
                error={validationErrors.luas_m2}
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
                error={validationErrors.jumlah_kamar}
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
                error={validationErrors.jarak_kampus_km}
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
                type={TOAST_TYPES.SUCCESS}
                title="Prediksi Berhasil"
                message={
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {formatCurrency(result.prediksi_harga)}
                    </div>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Estimasi harga kos berdasarkan data yang Anda masukkan
                    </p>
                  </div>
                }
              />
            )}

            {error && (
              <Alert
                type={TOAST_TYPES.ERROR}
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
                <p className="text-gray-500 dark:text-gray-400">Isi form di sebelah kiri untuk mendapatkan prediksi harga</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PredictPage;