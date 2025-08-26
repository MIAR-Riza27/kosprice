import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Kos<span className="text-yellow-300">Price</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Aplikasi prediksi harga kos/kontrakan menggunakan Machine Learning. 
              Dapatkan estimasi harga yang akurat berdasarkan lokasi, luas, dan fasilitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#predict" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  Prediksi Harga
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  Riwayat Prediksi
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-300 transition-colors">
                  Tentang Aplikasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold mb-4">Teknologi</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Python & FastAPI</li>
              <li>React & Tailwind CSS</li>
              <li>Machine Learning (XGBoost)</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 KosPrice. Dibuat sebagai project portofolio Data Science & Full Stack Development.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer