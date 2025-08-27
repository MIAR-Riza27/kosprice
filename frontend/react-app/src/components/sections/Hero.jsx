import React from 'react';
import Button from '../ui/Button';

const Hero = ({ navigateTo, isAppLoaded }) => {
  return (
    <div className="py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12 mt-8 sm:mt-12 md:mt-16 lg:mt-32 xl:mt-40 2xl:mt-48">
          <h1 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
            font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
            dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400
            bg-clip-text text-transparent mb-6 lg:mb-8
            leading-relaxed pb-2 animate-fade-in px-2
          ">
            Selamat Datang di KosPrice
          </h1>
          <p className="
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
            text-gray-600 dark:text-gray-300 animate-slide-up max-w-4xl mx-auto leading-relaxed
            px-4 sm:px-6 lg:px-8
          ">
            Prediksi harga kos/kontrakan dengan teknologi Machine Learning. 
            Dapatkan estimasi yang akurat berdasarkan lokasi, luas, dan fasilitas.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4 transition-all duration-500 delay-300 ${
          isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button 
            onClick={() => navigateTo('predict')}
            variant="primary"
            size="large"
          >
            Mulai Prediksi
          </Button>
          <Button 
            onClick={() => navigateTo('about')}
            variant="secondary"
            size="large"
          >
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;