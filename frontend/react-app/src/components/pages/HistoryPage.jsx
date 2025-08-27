import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import Alert from '../feedback/Alert';
import EmptyState from '../feedback/EmptyState';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadHistory = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://127.0.0.1:8000/history');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setHistory(data.history || []);
    } catch (err) {
      setError(`Error loading history: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Riwayat Prediksi
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Lihat semua prediksi harga kos yang pernah Anda buat
          </p>
          
          <Button
            onClick={loadHistory}
            variant="primary"
            disabled={loading}
          >
            {loading ? <Loader text="Loading..." /> : 'Refresh Data'}
          </Button>
        </div>

        {loading && !history.length && (
          <div className="flex justify-center py-12">
            <Loader size="large" />
          </div>
        )}

        {error && (
          <Alert
            type="error"
            title="Error"
            message={error}
            className="mb-6"
          />
        )}

        {!loading && !error && history.length === 0 && (
          <EmptyState
            title="Belum ada riwayat prediksi"
            message="Buat prediksi pertama Anda untuk melihat riwayat"
            icon="history"
          />
        )}

        {!loading && !error && history.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(item.timestamp).toLocaleString('id-ID')}
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Luas:</span>
                    <span className="font-medium">{item.input?.luas_m2 || '-'} m²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kamar:</span>
                    <span className="font-medium">{item.input?.jumlah_kamar || '-'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Jarak:</span>
                    <span className="font-medium">{item.input?.jarak_kampus_km || '-'} km</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Prediksi Harga</div>
                    <div className="text-xl font-bold text-green-600">
                      Rp {Number(item.prediksi_harga || 0).toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;