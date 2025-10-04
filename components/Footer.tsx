import Link from "next/link";
import Typography from "./Typography";
import Card from "./Card";

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--background-light-alt)] texture-dots border-t border-[var(--color-primary-600)]/20 py-16 px-6 mt-auto">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Typography variant="h3" texture="gradient-primary" weight="bold">
                                KosPrice
                            </Typography>
                            <div className="w-2 h-6 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full shadow-sm"></div>
                        </div>
                        
                        <Typography variant="p" texture="muted" size="sm" className="leading-relaxed mb-6 max-w-md">
                            Platform AI terdepan untuk prediksi harga kos yang membantu mahasiswa, pemilik properti, 
                            dan agen real estat membuat keputusan cerdas dengan data akurat dan real-time.
                        </Typography>
                        
                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-6">
                            <div className="text-center">
                                <Typography variant="h4" texture="primary" className="text-texture-primary mb-1">
                                    90%+
                                </Typography>
                                <Typography variant="small" texture="muted" size="xs">
                                    Akurasi
                                </Typography>
                            </div>
                            <div className="text-center">
                                <Typography variant="h4" texture="primary" className="text-texture-primary mb-1">
                                    15K+
                                </Typography>
                                <Typography variant="small" texture="muted" size="xs">
                                    Data Kos
                                </Typography>
                            </div>
                            <div className="text-center">
                                <Typography variant="h4" texture="primary" className="text-texture-primary mb-1">
                                    50+
                                </Typography>
                                <Typography variant="small" texture="muted" size="xs">
                                    Kota
                                </Typography>
                            </div>
                        </div>
                        
                        {/* Feature badges */}
                        <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30">
                                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
                                <Typography variant="small" texture="primary" size="xs" weight="medium">
                                    AI-Powered
                                </Typography>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-secondary-600)]/20 border border-[var(--color-secondary-600)]/30">
                                <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                                <Typography variant="small" texture="primary" size="xs" weight="medium">
                                    Real-time
                                </Typography>
                            </div>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Typography variant="h5" texture="default" weight="semibold">
                                Pages
                            </Typography>
                            <div className="w-1 h-4 bg-[var(--color-secondary)] rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                            <Link href="/" className="block hover:scale-105 transition-all duration-300 group">
                                <Typography variant="span" texture="muted" size="sm" className="group-hover:text-[var(--color-secondary)]">
                                    Homepage
                                </Typography>
                            </Link>
                            <Link href="/predict" className="block hover:scale-105 transition-all duration-300 group">
                                <Typography variant="span" texture="muted" size="sm" className="group-hover:text-[var(--color-secondary)]">
                                    Predict
                                </Typography>
                            </Link>
                            <Link href="/history" className="block hover:scale-105 transition-all duration-300 group">
                                <Typography variant="span" texture="muted" size="sm" className="group-hover:text-[var(--color-secondary)]">
                                    History
                                </Typography>
                            </Link>
                            <Link href="/about" className="block hover:scale-105 transition-all duration-300 group">
                                <Typography variant="span" texture="muted" size="sm" className="group-hover:text-[var(--color-secondary)]">
                                    About
                                </Typography>
                            </Link>
                        </div>
                    </div>

                    {/* Features & Tools */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Typography variant="h5" texture="default" weight="semibold">
                                Features
                            </Typography>
                            <div className="w-1 h-4 bg-[var(--color-secondary)] rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                                <Typography variant="span" texture="muted" size="sm">Smart Analysis</Typography>
                            </div>
                            <div className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                                <Typography variant="span" texture="muted" size="sm">Location Intelligence</Typography>
                            </div>
                            <div className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                                <Typography variant="span" texture="muted" size="sm">Instant Results</Typography>
                            </div>
                            <div className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                                <Typography variant="span" texture="muted" size="sm">Market Insights</Typography>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Stack Section */}
                <div className="border-t border-[var(--color-primary-600)]/20 pt-8 mb-8">
                    <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Typography variant="h5" texture="default" weight="semibold">
                                Built With Modern Tech
                            </Typography>
                            <div className="w-1.5 h-5 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full"></div>
                        </div>
                        <Typography variant="p" texture="muted" size="sm" className="mb-6">
                            Teknologi terdepan untuk performa dan keakuratan optimal
                        </Typography>
                        
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <Card variant="default" className="px-4 py-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">⚛️</span>
                                    <Typography variant="small" texture="primary" size="xs" weight="medium">Next.js</Typography>
                                </div>
                            </Card>
                            <Card variant="default" className="px-4 py-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-[var(--color-secondary)]">🐍</span>
                                    <Typography variant="small" texture="primary" size="xs" weight="medium">Python ML</Typography>
                                </div>
                            </Card>
                            <Card variant="default" className="px-4 py-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-[var(--color-primary)]">🎨</span>
                                    <Typography variant="small" texture="primary" size="xs" weight="medium">TailwindCSS</Typography>
                                </div>
                            </Card>
                            <Card variant="default" className="px-4 py-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-[var(--color-secondary)]">🤖</span>
                                    <Typography variant="small" texture="primary" size="xs" weight="medium">AI Models</Typography>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[var(--color-primary-600)]/20 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        {/* Copyright & Love message */}
                        <div className="text-center lg:text-left">
                            <Typography variant="small" texture="muted" size="xs" className="mb-2">
                                © 2025 KosPrice. Hak cipta dilindungi undang-undang.
                            </Typography>
                            <Typography variant="small" texture="muted" size="xs">
                                Dibuat dengan <span className="text-[var(--color-secondary)] animate-pulse">❤️</span> untuk kemudahan pencarian kos di Indonesia
                            </Typography>
                        </div>
                        
                        {/* System Status & Version */}
                        <div className="flex items-center gap-4">
                            <Card variant="default" className="px-3 py-2 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse"></span>
                                    <Typography variant="small" texture="primary" size="xs" weight="medium">
                                        System Online
                                    </Typography>
                                </div>
                            </Card>
                            <Card variant="default" className="px-3 py-2 backdrop-blur-sm">
                                <Typography variant="small" texture="primary" size="xs" weight="medium">
                                    v1.0.0
                                </Typography>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action Footer */}
                <div className="mt-8 text-center">
                    <Card variant="secondary" className="inline-flex items-center px-6 py-3 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                        <Typography variant="small" texture="white" size="sm" weight="medium">
                            Mulai prediksi harga kos Anda sekarang!!
                        </Typography>
                    </Card>
                </div>
            </div>
        </footer>
    );
}