import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    // App loading animation
    setTimeout(() => setIsAppLoaded(true), 200);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <Navbar 
        onToggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
      />
      
      <div className="flex flex-1">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        
        <main className={`flex-1 p-6 transition-all duration-700 ${
          isSidebarOpen ? 'blur-sm scale-95' : 'blur-0 scale-100'
        }`}>
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in">
              Selamat Datang di KosPrice
            </h1>
            <p className="text-gray-600 animate-slide-up">
              Prediksi harga kos/kontrakan dengan teknologi Machine Learning
            </p>
            
            {/* Demo Cards dengan staggered animation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((item, index) => (
                <div 
                  key={item}
                  className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                    isAppLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Feature {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
