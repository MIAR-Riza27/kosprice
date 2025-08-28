import React from 'react';
import Button from '../ui/Button';

const Hero = ({ navigateTo, isAppLoaded }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* 👈 Fix: Hero title dengan spacing yang proper */}
          <div className={`transition-all duration-700 delay-300 ${
            isAppLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <h1 className="
              text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
              bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
              dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 
              bg-clip-text text-transparent 
              mb-8 leading-[0.95] pb-6
              tracking-tight
            ">
              KosPrice
            </h1>
          </div>

          <div className={`transition-all duration-700 delay-500 ${
            isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="
              text-2xl md:text-3xl lg:text-4xl font-semibold 
              text-gray-700 dark:text-gray-300 
              mb-8 leading-tight
              tracking-wide
            ">
              AI-Powered Kos Price Prediction
            </h2>
          </div>

          <div className={`transition-all duration-700 delay-700 ${
            isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <p className="
              text-lg md:text-xl text-gray-600 dark:text-gray-400 
              max-w-3xl mx-auto mb-12 leading-relaxed
            ">
              Prediksi harga kos dan kontrakan dengan akurasi tinggi menggunakan teknologi Machine Learning. 
              Dapatkan estimasi harga yang tepat berdasarkan lokasi, fasilitas, dan berbagai faktor lainnya.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-900 ${
            isAppLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`}>
            <Button
              onClick={() => navigateTo('predict')}
              size="large"
              variant="primary"
              className="min-w-[200px] shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Mulai Prediksi
              </div>
            </Button>
            
            <Button
              onClick={() => navigateTo('about')}
              size="large"
              variant="secondary"
              className="min-w-[200px] shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pelajari Lebih Lanjut
              </div>
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="mt-20 relative">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-1100 ${
              isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Prediksi Cepat</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Hasil dalam hitungan detik</p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Akurasi Tinggi</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Model dalam pengembangan</p>
              </div>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Mudah Digunakan</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Interface yang intuitif</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;