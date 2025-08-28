import React from 'react';

const HowItWorks = ({ isAppLoaded }) => {
  const steps = [
    {
      number: "01",
      title: "Input Data Kos",
      description: "Masukkan detail kos seperti luas kamar, jumlah kamar, dan jarak ke kampus pada form prediksi.",
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      color: "from-primary-500 to-primary-600",
      delay: 200
    },
    {
      number: "02", 
      title: "Analisis AI",
      description: "Sistem menggunakan algoritma XGBoost untuk menganalisis data dan menghitung prediksi harga berdasarkan model yang telah dilatih.",
      icon: "M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      color: "from-accent-500 to-accent-600",
      delay: 300
    },
    {
      number: "03",
      title: "Hasil Prediksi",
      description: "Dapatkan estimasi harga kos yang akurat dalam hitungan detik, lengkap dengan analisis faktor-faktor yang mempengaruhi harga.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "from-success-500 to-success-600",
      delay: 400
    },
    {
      number: "04",
      title: "Simpan Riwayat",
      description: "Semua prediksi tersimpan otomatis dalam riwayat, sehingga Anda dapat melakukan perbandingan dan analisis lebih lanjut.",
      icon: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
      color: "from-warning-500 to-warning-600",
      delay: 500
    }
  ];

  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-600 delay-100 ${
          isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent mb-4">
            Cara Kerja Platform
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Proses sederhana untuk mendapatkan prediksi harga kos yang akurat dengan teknologi AI
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  group relative transition-all duration-500
                  ${isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                <div className="bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-secondary-700/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Step number badge */}
                  <div className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-600 delay-600 ${
          isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 px-6 py-3 rounded-xl border border-primary-200 dark:border-primary-700">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              Mulai prediksi harga kos Anda sekarang!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;