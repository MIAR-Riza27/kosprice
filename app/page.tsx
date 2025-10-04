import Card from "@/components/Card";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import FeatureScroller from "@/components/FeatureScroller";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section - Linear inspired left alignment with noise texture */}
      <section className="px-6 py-20 md:py-32 texture-noise">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
              <Typography variant="small" texture="primary" size="xs" weight="medium">
                AI-Powered Prediction
              </Typography>
            </div>
            
            <Typography variant="h1" texture="default" className="mb-6 leading-tight">
              Prediksi Harga Kos
              <br />
              <span className="text-texture-hero">Cerdas & Akurat</span>
            </Typography>
            
            <Typography variant="p" texture="muted" size="xl" className="mb-8 leading-relaxed max-w-2xl">
              Platform AI yang membantu mahasiswa, pemilik properti, dan agen real estat 
              membuat keputusan tepat dengan prediksi harga kos berdasarkan data real-time.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="primary" 
                size="lg" 
                href="/predict"
                className="group"
              >
                Mulai Prediksi
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/about"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
            
            {/* Stats - Superhuman inspired highlighting */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center sm:text-left">
                <Typography variant="h3" texture="primary" className="text-texture-primary">
                  90%+
                </Typography>
                <Typography variant="small" texture="muted">
                  Akurasi Prediksi
                </Typography>
              </div>
              <div className="text-center sm:text-left">
                <Typography variant="h3" texture="primary" className="text-texture-primary">
                  15K+
                </Typography>
                <Typography variant="small" texture="muted">
                  Data Kos
                </Typography>
              </div>
              <div className="text-center sm:text-left">
                <Typography variant="h3" texture="primary" className="text-texture-primary">
                  50+
                </Typography>
                <Typography variant="small" texture="muted">
                  Kota Indonesia
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated with FeatureScroller component */}
      <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-dots">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" texture="default" className="mb-4">
              Fitur Unggulan
            </Typography>
            <Typography variant="p" texture="muted" size="lg">
              Teknologi AI terdepan untuk prediksi harga kos yang akurat dan insights mendalam.
            </Typography>
          </div>
          
          {/* Feature Scroller Component */}
          <FeatureScroller />
        </div>
      </section>

      {/* Preview Section - Superhuman inspired with gradient noise */}
      <section className="px-6 py-20 texture-gradient-noise">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content - Linear style */}
            <div>
              <Typography variant="h2" texture="default" className="mb-6">
                Cara Kerja Platform
              </Typography>
              <Typography variant="p" texture="muted" size="lg" className="mb-8">
                Proses prediksi yang sederhana namun powerful, didukung teknologi AI terdepan.
              </Typography>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Typography variant="small" texture="white" size="xs" weight="bold">1</Typography>
                  </div>
                  <div>
                    <Typography variant="h6" texture="default" className="mb-2">
                      Input Data Kos
                    </Typography>
                    <Typography variant="p" texture="muted" size="sm">
                      Masukkan informasi lokasi, jenis kos, fasilitas, dan spesifikasi lainnya.
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Typography variant="small" texture="white" size="xs" weight="bold">2</Typography>
                  </div>
                  <div>
                    <Typography variant="h6" texture="default" className="mb-2">
                      AI Processing
                    </Typography>
                    <Typography variant="p" texture="muted" size="sm">
                      Model machine learning menganalisis data dengan algoritma canggih.
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Typography variant="small" texture="white" size="xs" weight="bold">3</Typography>
                  </div>
                  <div>
                    <Typography variant="h6" texture="default" className="mb-2">
                      Prediksi Akurat
                    </Typography>
                    <Typography variant="p" texture="muted" size="sm">
                      Dapatkan estimasi harga dengan tingkat akurasi 90%+ dan insights mendalam.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right visual - Superhuman inspired frame */}
            <div className="relative">
              <Card variant="primary" className="p-8 text-right">
                <Typography variant="h3" texture="white" className="mb-4">
                  Rp 1.850.000
                </Typography>
                <Typography variant="p" texture="white" size="sm" className="mb-6 opacity-90">
                  Estimasi harga untuk kos putra di area Universitas Indonesia
                </Typography>
                
                <div className="space-y-3 text-right">
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <Typography variant="small" texture="white" size="xs">
                      Jarak ke kampus: 500m
                    </Typography>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <Typography variant="small" texture="white" size="xs">
                      Fasilitas lengkap: WiFi, AC, Kamar Mandi Dalam
                    </Typography>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <Typography variant="small" texture="white" size="xs">
                      Tingkat akurasi: 94%
                    </Typography>
                  </div>
                </div>
              </Card>
              
              {/* Floating elements - Superhuman style */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-2xl"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Linear clean presentation with subtle texture */}
      <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" texture="default" className="mb-4">
              Teknologi Terdepan
            </Typography>
            <Typography variant="p" texture="muted" size="lg">
              Dibangun dengan stack teknologi modern untuk performa optimal.
            </Typography>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">⚛️</span>
              <Typography variant="h6" texture="default" className="mb-2">
                Next.js
              </Typography>
              <Typography variant="small" texture="muted" size="xs">
                Frontend Framework
              </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">🐍</span>
              <Typography variant="h6" texture="default" className="mb-2">
                Python ML
              </Typography>
              <Typography variant="small" texture="muted" size="xs">
                Machine Learning
              </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">🎨</span>
              <Typography variant="h6" texture="default" className="mb-2">
                TailwindCSS
              </Typography>
              <Typography variant="small" texture="muted" size="xs">
                Styling Framework
              </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">🤖</span>
              <Typography variant="h6" texture="default" className="mb-2">
                AI Models
              </Typography>
              <Typography variant="small" texture="muted" size="xs">
                Prediction Engine
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Superhuman inspired with strong visual impact */}
      <section className="px-6 py-20 texture-noise">
        <div className="max-w-4xl mx-auto text-center">
          <Card variant="gradient" className="p-12 text-center relative overflow-hidden">
            <Typography variant="h2" texture="white" className="mb-6 relative z-10">
              Siap Mulai Prediksi?
            </Typography>
            <Typography variant="p" texture="white" size="lg" className="mb-8 opacity-90 relative z-10">
              Bergabung dengan ribuan pengguna yang sudah merasakan kemudahan prediksi harga kos dengan AI.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button 
                variant="light" 
                size="lg"
                href="/predict"
                className="group"
              >
                Coba Sekarang
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/about"
                className="border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof - Linear style testimonials with dots */}
      <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-dots">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" texture="default" className="mb-4">
              Dipercaya Pengguna
            </Typography>
            <Typography variant="p" texture="muted" size="lg">
              Feedback positif dari mahasiswa dan pemilik properti.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="default" className="p-8 backdrop-blur-sm h-full flex flex-col">
              <div className="mb-6 flex-grow">
                <Typography variant="p" texture="muted" size="sm" className="italic leading-relaxed">
                  &quot;Sangat membantu dalam mencari kos dengan budget yang tepat. Prediksinya akurat!&quot;
                </Typography>
              </div>
              
              {/* Improved spacing and segmentation */}
              <div className="border-t border-[var(--color-primary-600)]/20 pt-4 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-lg"></span>
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" texture="default" weight="semibold" className="mb-1">
                      Ahmad Rizki
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs" className="text-[var(--color-primary-400)]">
                      Mahasiswa UI
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="default" className="p-8 backdrop-blur-sm h-full flex flex-col">
              <div className="mb-6 flex-grow">
                <Typography variant="p" texture="muted" size="sm" className="italic leading-relaxed">
                  &quot;Platform yang sangat inovatif. Membantu saya menentukan harga sewa yang kompetitif.&quot;
                </Typography>
              </div>
              
              {/* Improved spacing and segmentation */}
              <div className="border-t border-[var(--color-primary-600)]/20 pt-4 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-lg"></span>
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" texture="default" weight="semibold" className="mb-1">
                      Sari Wulandari
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs" className="text-[var(--color-primary-400)]">
                      Pemilik Kos
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="default" className="p-8 backdrop-blur-sm h-full flex flex-col">
              <div className="mb-6 flex-grow">
                <Typography variant="p" texture="muted" size="sm" className="italic leading-relaxed">
                  &quot;Interface yang clean dan hasil prediksi yang dapat diandalkan untuk klien.&quot;
                </Typography>
              </div>
              
              {/* Improved spacing and segmentation */}
              <div className="border-t border-[var(--color-primary-600)]/20 pt-4 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-lg"></span>
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" texture="default" weight="semibold" className="mb-1">
                      Budi Santoso
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs" className="text-[var(--color-primary-400)]">
                      Agen Properti
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
