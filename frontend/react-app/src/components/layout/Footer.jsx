import React, { useEffect, useState, useRef } from 'react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer untuk trigger animation saat footer terlihat
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoaded(true), 200);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white mt-auto relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform transition-transform duration-[3000ms] ${
          isLoaded ? 'translate-x-0' : '-translate-x-full'
        }`}></div>
        {/* Floating circles animation */}
        <div className={`absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 transition-all duration-[2000ms] ${
          isLoaded ? 'scale-100 translate-y-0' : 'scale-0 translate-y-8'
        }`}></div>
        <div className={`absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20 transition-all duration-[2500ms] delay-300 ${
          isLoaded ? 'scale-100 translate-y-0' : 'scale-0 translate-y-8'
        }`}></div>
        <div className={`absolute bottom-10 left-1/2 w-12 h-12 bg-indigo-400 rounded-full opacity-20 transition-all duration-[1800ms] delay-500 ${
          isLoaded ? 'scale-100 translate-y-0' : 'scale-0 translate-y-8'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Description - Animated */}
          <div className={`transition-all duration-800 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-lg font-bold mb-4 hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
              Kos<span className="text-yellow-300 animate-pulse">Price</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed hover:text-gray-200 transition-colors duration-300">
              Aplikasi prediksi harga kos/kontrakan menggunakan Machine Learning. 
              Dapatkan estimasi harga yang akurat berdasarkan lokasi, luas, dan fasilitas.
            </p>
            
            {/* Tech badges with animation */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['ML', 'React', 'Python'].map((tech, index) => (
                <span 
                  key={tech}
                  className={`px-2 py-1 bg-blue-600 text-xs rounded-full text-white transform transition-all duration-500 hover:scale-110 hover:bg-blue-500 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links - Animated */}
          <div className={`transition-all duration-800 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="text-md font-semibold mb-4 text-yellow-300">Menu Cepat</h4>
            <ul className="space-y-3 text-sm">
              {[ 
                { href: "#home", text: "Beranda" },
                { href: "#predict", text: "Prediksi Harga" },
                { href: "#history", text: "Riwayat Prediksi" },
                { href: "#about", text: "Tentang Aplikasi" }
              ].map((item, index) => (
                <li 
                  key={item.text}
                  className={`transition-all duration-500 delay-${600 + index * 100} ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                >
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-yellow-300 transition-all duration-300 flex items-center group transform hover:translate-x-2"
                  >
                    <span className="group-hover:font-medium">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack - Animated */}
          <div className={`transition-all duration-800 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="text-md font-semibold mb-4 text-yellow-300">Teknologi</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {[ 
                { text: "Python & FastAPI", color: "hover:text-green-400" },
                { text: "React & Tailwind CSS", color: "hover:text-blue-400" },
                { text: "Machine Learning (XGBoost)", color: "hover:text-purple-400" },
                { text: "Data Science", color: "hover:text-orange-400" }
              ].map((item, index) => (
                <li 
                  key={item.text}
                  className={`transition-all duration-500 delay-${700 + index * 100} transform hover:scale-105 hover:translate-x-1 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                >
                  <span className={`transition-colors duration-300 cursor-pointer ${item.color}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Social Links atau Stats */}
            <div className="mt-6 flex space-x-4">
              {['⭐', '🚀', '💡'].map((emoji, index) => (
                <div 
                  key={emoji}
                  className={`w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm cursor-pointer transform transition-all duration-300 hover:scale-125 hover:bg-blue-600 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: `${900 + index * 150}ms` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Wave Animation */}
        <div className={`border-t border-gray-700 mt-8 pt-6 text-center relative transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Animated wave line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent">
            <div className={`h-full bg-gradient-to-r from-blue-400 to-indigo-400 transform transition-transform duration-[2000ms] ${
              isLoaded ? 'translate-x-0' : '-translate-x-full'
            }`}></div>
          </div>
          
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer">
            &copy; 2025 KosPrice. Dibuat sebagai project portofolio 
            <span className="text-yellow-300 hover:text-yellow-200 transition-colors duration-200"> Data Science & Full Stack Development</span>.
          </p>
          
          {/* Typing animation */}
          <div className={`mt-2 text-xs text-gray-500 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="animate-pulse">✨ Powered by AI & Modern Web Technologies</span>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-yellow-300 rounded-full opacity-60 animate-bounce transition-all duration-1000 ${
              isLoaded ? 'opacity-60' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </footer>
  )
}

export default Footer