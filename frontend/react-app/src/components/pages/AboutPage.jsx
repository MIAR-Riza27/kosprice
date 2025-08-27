import React from 'react';
import Card from '../ui/Card';

const AboutPage = () => {
  const features = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Prediksi Real-time",
      description: "Dapatkan estimasi harga kos dalam hitungan detik"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Akurasi Tinggi",
      description: "Model XGBoost dengan akurasi 94.8% berdasarkan data real"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Riwayat Tersimpan",
      description: "Semua prediksi tersimpan untuk referensi masa depan"
    },
    {
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Responsif",
      description: "Interface modern yang dapat diakses di semua perangkat"
    }
  ];

  const techStack = [
    { name: "React.js", description: "Library JavaScript untuk user interface", color: "from-blue-500 to-cyan-500" },
    { name: "TailwindCSS", description: "Framework CSS utility-first", color: "from-teal-500 to-green-500" },
    { name: "FastAPI", description: "Framework Python untuk REST API", color: "from-green-500 to-emerald-500" },
    { name: "XGBoost", description: "Machine Learning algorithm untuk prediksi", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 👈 Fix: Proper header spacing and line-height */}
        <div className="text-center mb-16">
          <h1 className="
            text-3xl md:text-4xl lg:text-5xl font-bold 
            bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
            dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 
            bg-clip-text text-transparent 
            mb-6 leading-tight pb-2
          ">
            Tentang KosPrice
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Platform prediksi harga kos yang menggunakan teknologi Machine Learning untuk memberikan estimasi harga yang akurat dan terpercaya
          </p>
        </div>

        {/* Main Description */}
        <Card className="mb-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Apa itu KosPrice?
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center mb-8 max-w-4xl mx-auto">
            KosPrice adalah platform inovatif yang menggunakan teknologi Machine Learning untuk memprediksi harga kos dan kontrakan. 
            Dengan menganalisis berbagai faktor seperti luas kamar, jumlah kamar, dan jarak ke kampus, kami memberikan estimasi harga yang akurat dan membantu Anda membuat keputusan yang lebih baik.
          </p>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Fitur Unggulan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Teknologi yang Digunakan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-white font-bold text-lg">{tech.name[0]}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {tech.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Card className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Mengapa Memilih KosPrice?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">94.8%</div>
              <div className="text-gray-600 dark:text-gray-300">Tingkat Akurasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15K+</div>
              <div className="text-gray-600 dark:text-gray-300">Prediksi Dibuat</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3K+</div>
              <div className="text-gray-600 dark:text-gray-300">Pengguna Aktif</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;