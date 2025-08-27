import React from 'react';

const Breadcrumbs = ({ currentPage }) => {
  const pageLabels = {
    home: 'Beranda',
    predict: 'Prediksi Harga',
    history: 'Riwayat Prediksi',
    about: 'Tentang Kami'
  };

  if (currentPage === 'home') return null; // Don't show on home page

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-6 px-4 sm:px-6 lg:px-8">
      <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Beranda</span>
      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-blue-600 dark:text-blue-400 font-medium">{pageLabels[currentPage]}</span>
    </nav>
  );
};

export default Breadcrumbs;