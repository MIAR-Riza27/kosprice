"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full h-16 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60 px-6 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between h-full md:px-0">
                <Link 
                    href="/" 
                    className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                    KosPrice
                </Link>
                <div className="flex gap-8">
                    <Link 
                        href="/predict" 
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 relative group"
                    >
                        Predict
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-200"></span>
                    </Link>
                    <Link 
                        href="/history" 
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 relative group"
                    >
                        History
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-200"></span>
                    </Link>
                    <Link 
                        href="/about" 
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 relative group"
                    >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-200"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}