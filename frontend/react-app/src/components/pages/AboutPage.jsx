import React from 'react';
import Card from '../ui/Card';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Tentang KosPrice
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Platform prediksi harga kos menggunakan teknologi Machine Learning
          </p>
        </div>

        <Card>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Apa itu KosPrice?</h2>
            <p className="text-gray-600 mb-6">
              KosPrice adalah platform inovatif yang menggunakan teknologi Machine Learning untuk memprediksi harga kos dan kontrakan. 
              Dengan menganalisis berbagai faktor seperti luas kamar, jumlah kamar, dan jarak ke kampus, kami memberikan estimasi harga yang akurat.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Teknologi yang Digunakan</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Frontend:</strong> React.js + TailwindCSS</li>
              <li><strong>Backend:</strong> FastAPI (Python)</li>
              <li><strong>Machine Learning:</strong> XGBoost Algorithm</li>
              <li><strong>Database:</strong> JSON-based storage</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fitur Utama</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Prediksi harga real-time</li>
              <li>Riwayat prediksi tersimpan</li>
              <li>Interface responsif dan modern</li>
              <li>Akurasi tinggi dengan model ML terlatih</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;