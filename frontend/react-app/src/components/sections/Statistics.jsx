import React, { useState, useEffect } from 'react';

const Statistics = ({ isAppLoaded }) => {
  const [animatedCounts, setAnimatedCounts] = useState({
    predictions: 0,
    users: 0,
    accuracy: 0,
    locations: 0
  });

  const finalCounts = {
    predictions: 15420,
    users: 3250,
    accuracy: 94.8,
    locations: 127
  };

  useEffect(() => {
    if (!isAppLoaded) return;

    // Animate counters
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setAnimatedCounts(prev => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(finalCounts).forEach(key => {
          const final = finalCounts[key];
          const current = prev[key];
          const increment = final / steps;
          
          if (current < final) {
            newCounts[key] = Math.min(current + increment, final);
            allComplete = false;
          } else {
            newCounts[key] = final;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isAppLoaded]);

  const stats = [
    {
      icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Total Prediksi",
      value: Math.floor(animatedCounts.predictions).toLocaleString('id-ID'),
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
      delay: 200
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Pengguna Aktif",
      value: Math.floor(animatedCounts.users).toLocaleString('id-ID'),
      suffix: "+",
      color: "from-purple-500 to-pink-500",
      delay: 300
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Akurasi Model",
      value: animatedCounts.accuracy.toFixed(1),
      suffix: "%",
      color: "from-green-500 to-emerald-500",
      delay: 400
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Lokasi Terdaftar",
      value: Math.floor(animatedCounts.locations).toLocaleString('id-ID'),
      suffix: "+",
      color: "from-orange-500 to-red-500",
      delay: 500
    }
  ];

  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-600 delay-100 ${
          isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            Statistik Platform
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Data real-time tentang performa dan penggunaan platform KosPrice
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm 
                rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-slate-700/50
                transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2
                overflow-hidden
                ${isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {stat.title}
                </div>
              </div>

              {/* Decorative element */}
              <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${stat.color} rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;