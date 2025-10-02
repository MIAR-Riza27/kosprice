"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full h-20 text-xl text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full md:px-0">
                <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition text-2xl">KosPrice</Link>
                <div className="flex gap-5">
                    <Link href="/predict" className="hover:text-gray-700 dark:hover:text-gray-300 transition">Predict</Link>
                    <Link href="/history" className="hover:text-gray-700 dark:hover:text-gray-300 transition">History</Link>
                    <Link href="/about" className="hover:text-gray-700 dark:hover:text-gray-300 transition">About</Link>
                </div>
            </div>
        </nav>
    );
}