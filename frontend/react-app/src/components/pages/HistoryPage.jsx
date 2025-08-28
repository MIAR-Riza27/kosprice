import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from '../../utils/useToast';
import { api } from '../../utils/api';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { TOAST_TYPES } from '../../utils/constants';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import Alert from '../feedback/Alert';
import EmptyState from '../feedback/EmptyState';

const HistoryPage = ({ isAppLoaded = false }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { success, error: showError } = useToast();

  // gunakan useCallback tanpa dependency toast (agar stabil)
  const loadHistory = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.getHistory();
      if (response.success) {
        setHistory(response.data.history || []);
      } else {
        setHistory([]);
        setError('Gagal memuat data');
      }
    } catch (err) {
      setError(`Error loading history: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []); // kosong agar tidak berubah setiap render

  useEffect(() => {
    loadHistory();
  }, [loadHistory]); // hanya dipanggil sekali

  const deleteHistoryItem = async (id) => {
    try {
      await api.deleteHistory(id);
      setHistory(prev => prev.filter(item => item.id !== id));
      success('Berhasil', 'Riwayat berhasil dihapus');
    } catch (err) {
      showError('Gagal Menghapus', err.message);
    }
  };

  return (
    <div className={`min-h-screen pt-20 pb-12 transition-all duration-600 ${
      isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent mb-6 leading-tight pb-2">
            Riwayat Prediksi
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Lihat semua prediksi harga kos yang pernah Anda buat sebelumnya
          </p>
          <Button
            onClick={loadHistory}
            variant="primary"
            disabled={loading}
            className="shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {loading ? (
              <div className="flex items-center">
                <Loader />
                <span className="ml-2">Memuat...</span>
              </div>
            ) : (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh Data
              </div>
            )}
          </Button>
        </div>

        {loading && !history.length && (
          <div className="flex justify-center py-12">
            <Loader size="large" />
          </div>
        )}

        {error && (
          <Alert
            type={TOAST_TYPES.ERROR}
            title="Terjadi Kesalahan"
            message={error}
            className="mb-6"
          />
        )}

        {!loading && !error && history.length === 0 && (
          <EmptyState
            title="Belum ada riwayat prediksi"
            message="Buat prediksi pertama Anda untuk melihat riwayat di sini"
            icon="history"
            actionText="Buat Prediksi"
            onAction={() => window.location.href = '/predict'}
          />
        )}

        {!loading && !error && history.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                Menampilkan {history.length} riwayat prediksi
              </p>
              <Button
                onClick={() => setHistory([])}
                variant="outline"
                size="small"
                className="text-error-600 border-error-600 hover:bg-error-50 dark:hover:bg-error-900/20"
              >
                Hapus Semua
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {history.map((item, index) => (
                <Card
                  key={item.id || index}
                  className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 relative group"
                >
                  <button
                    onClick={() => deleteHistoryItem(item.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-error-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-error-600 flex items-center justify-center"
                    title="Hapus riwayat"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-secondary-700 px-2 py-1 rounded-full">
                      {formatDate(item.timestamp || item.created_at)}
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Luas Kamar:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {item.input?.luas_m2 || item.luas_m2 || '-'} m²
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Jumlah Kamar:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {item.input?.jumlah_kamar || item.jumlah_kamar || '-'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Jarak ke Kampus:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {item.input?.jarak_kampus_km || item.jarak_kampus_km || '-'} km
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-secondary-600 pt-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Estimasi Harga</div>
                      <div className="text-xl font-bold text-success-600 dark:text-success-400">
                        {formatCurrency(Number(item.prediksi_harga || item.predicted_price || 0))}
                      </div>
                      {item.confidence && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Confidence: {(item.confidence * 100).toFixed(1)}%
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      size="small"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => {
                        const text = `Prediksi Harga Kos:
Luas: ${item.input?.luas_m2 || item.luas_m2} m²
Kamar: ${item.input?.jumlah_kamar || item.jumlah_kamar}
Jarak: ${item.input?.jarak_kampus_km || item.jarak_kampus_km} km
Estimasi: ${formatCurrency(Number(item.prediksi_harga || item.predicted_price || 0))}`;
                        navigator.clipboard.writeText(text);
                        success('Disalin', 'Detail prediksi berhasil disalin');
                      }}
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Salin
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;