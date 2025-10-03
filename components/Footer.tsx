export default function Footer() {
    return (
        <footer className="w-full bg-gray-50/50 dark:bg-gray-950/50 backdrop-blur-sm border-t border-gray-200/60 dark:border-gray-800/60 py-8 px-6 mt-auto">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center space-y-4">
                    <div className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        KosPrice
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <span>Prediksi Harga Kos Cerdas</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>Berdasarkan Fasilitas</span>
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 text-center">
                        © 2025 KosPrice App. Dibuat dengan ❤️ untuk kemudahan pencarian kos.
                    </div>
                </div>
            </div>
        </footer>
    )
}