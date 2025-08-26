import React from 'react'

const Navbar = ({ onToggleSidebar }) => { // Terima props toggle
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold">
                Kos<span className="text-yellow-300">Price</span>
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Beranda
            </a>
            <a href="#predict" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Prediksi
            </a>
            <a href="#history" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Riwayat
            </a>
            <a href="#about" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Tentang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={onToggleSidebar} // Tambah onClick handler
              className="text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar