import React from 'react';

const Features = ({ isAppLoaded }) => {
  const features = [
    { 
      title: "Machine Learning", 
      desc: "Prediksi akurat menggunakan algoritma XGBoost yang telah dilatih dengan data real",
      color: "from-primary-500 to-primary-600",
      delay: 300
    },
    { 
      title: "Analisis Data", 
      desc: "Visualisasi data komprehensif untuk memahami tren harga kos di berbagai lokasi",
      color: "from-accent-500 to-accent-600",
      delay: 350
    },
    { 
      title: "Prediksi Presisi", 
      desc: "Estimasi harga berdasarkan lokasi, luas kamar, fasilitas, dan faktor-faktor lainnya",
      color: "from-success-500 to-success-600",
      delay: 400
    },
    { 
      title: "Interface Modern", 
      desc: "Antarmuka yang responsif dan mudah digunakan dengan teknologi React terbaru",
      color: "from-warning-500 to-warning-600",
      delay: 450
    },
    { 
      title: "Real-time", 
      desc: "Prediksi instan dengan API yang cepat menggunakan FastAPI dan Python",
      color: "from-primary-500 to-primary-600",
      delay: 500
    },
    { 
      title: "Riwayat Prediksi", 
      desc: "Simpan dan lihat kembali prediksi sebelumnya untuk analisis lebih lanjut",
      color: "from-accent-500 to-accent-600",
      delay: 550
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((item, index) => (
          <div 
            key={index}
            className={`group bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border border-gray-200/50 dark:border-secondary-700/50 relative overflow-hidden ${
              isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${item.delay}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
            
            <div className="relative z-10">
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-3 lg:mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                {item.desc}
              </p>
            </div>
            
            <div className={`absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${item.color} rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;