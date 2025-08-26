import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  // Ganti mousePos ke ref agar update lebih smooth
  const mousePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [, setMouseTick] = useState(0); // dummy state to force re-render

  useEffect(() => {
    setTimeout(() => setIsAppLoaded(true), 150);

    let ticking = false;
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMouseTick(tick => tick + 1); // trigger re-render
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>
        
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-150"
          style={{
            left: mousePosRef.current.x - 192,
            top: mousePosRef.current.y - 192,
            transform: `translate3d(0, 0, 0)`
          }}
        ></div>
        
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-700 ${
                isAppLoaded ? 'opacity-30' : 'opacity-0'
              }`}
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 30}%`,
                animationDelay: `${i * 0.3}s`,
                transform: `rotate(${i * 30}deg)`
              }}
            >
              <div 
                className={`
                  w-${4 + (i % 3) * 2} h-${4 + (i % 3) * 2} 
                  ${i % 3 === 0 ? 'bg-blue-300/20' : i % 3 === 1 ? 'bg-purple-300/20' : 'bg-indigo-300/20'}
                  ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'}
                  animate-float
                `}
                style={{
                  animationDuration: `${3 + (i % 3)}s`,
                  animationDelay: `${i * 0.15}s`
                }}
              ></div>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent"></div>
          <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  fill="rgba(59, 130, 246, 0.1)">
              <animateTransform attributeName="transform" type="translate" values="0 0;-100 0;0 0" dur="8s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </div>

      <Navbar 
        onToggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className={`flex flex-col flex-1 relative z-10 transition-all duration-500 ${
        isSidebarOpen ? 'blur-sm scale-95 brightness-75' : 'blur-0 scale-100 brightness-100'
      }`}>
        
        {/* Responsive spacing untuk navbar */}
        <div className="h-16"></div>
        
        {/* Main content dengan spacing yang benar */}
        <main className="flex-1 relative">
          <div className={`w-full transition-all duration-600 delay-200 ${
            isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {/* Hero Section dengan responsive spacing */}
            <div className="py-8 md:py-12 lg:py-16 xl:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tambahkan margin-top responsive di heading */}
                <div className="text-center mb-8 lg:mb-12 mt-8 sm:mt-12 md:mt-16 lg:mt-32 xl:mt-40 2xl:mt-48">
                  <h1 className="
                    text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                    font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                    bg-clip-text text-transparent mb-6 lg:mb-8
                    leading-relaxed
                    pb-2
                    animate-fade-in
                    px-2
                  ">
                    Selamat Datang di KosPrice
                  </h1>
                  <p className="
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                    text-gray-600 animate-slide-up max-w-4xl mx-auto leading-relaxed
                    px-4 sm:px-6 lg:px-8
                  ">
                    Prediksi harga kos/kontrakan dengan teknologi Machine Learning. 
                    Dapatkan estimasi yang akurat berdasarkan lokasi, luas, dan fasilitas.
                  </p>
                </div>
                
                {/* FIXED: CTA Buttons dengan spacing yang tepat */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4 transition-all duration-500 delay-300 ${
                  isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base">
                    🔮 Mulai Prediksi
                  </button>
                  <button className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 text-sm sm:text-base">
                    📚 Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
              
              {/* FIXED: Feature Cards dengan container yang proper */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {[
                    { 
                      title: "🤖 Machine Learning", 
                      desc: "Prediksi akurat menggunakan algoritma XGBoost yang telah dilatih dengan data real",
                      color: "from-blue-500 to-cyan-500",
                      delay: 300
                    },
                    { 
                      title: "📊 Analisis Data", 
                      desc: "Visualisasi data komprehensif untuk memahami tren harga kos di berbagai lokasi",
                      color: "from-purple-500 to-pink-500",
                      delay: 350
                    },
                    { 
                      title: "🎯 Prediksi Presisi", 
                      desc: "Estimasi harga berdasarkan lokasi, luas kamar, fasilitas, dan faktor-faktor lainnya",
                      color: "from-green-500 to-emerald-500",
                      delay: 400
                    },
                    { 
                      title: "📱 Interface Modern", 
                      desc: "Antarmuka yang responsif dan mudah digunakan dengan teknologi React terbaru",
                      color: "from-orange-500 to-red-500",
                      delay: 450
                    },
                    { 
                      title: "⚡ Real-time", 
                      desc: "Prediksi instan dengan API yang cepat menggunakan FastAPI dan Python",
                      color: "from-indigo-500 to-blue-500",
                      delay: 500
                    },
                    { 
                      title: "📈 Riwayat Prediksi", 
                      desc: "Simpan dan lihat kembali prediksi sebelumnya untuk analisis lebih lanjut",
                      color: "from-pink-500 to-purple-500",
                      delay: 550
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden ${
                        isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
                      style={{ transitionDelay: `${item.delay}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 group-hover:text-gray-900 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                          {item.desc}
                        </p>
                      </div>
                      
                      <div className={`absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${item.color} rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
