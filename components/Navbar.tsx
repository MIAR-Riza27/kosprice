"use client";

import { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-16 bg-[var(--background-light)]/95 backdrop-blur-md border-b border-[var(--color-primary-600)]/20 px-6 sticky top-0 z-50 shadow-lg shadow-[var(--color-primary)]/10 texture-glass">
            <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
                <Link 
                    href="/" 
                    className="hover:scale-105 transition-all duration-300 group"
                >
                    <div className="flex items-center gap-2">
                        <Typography variant="h3" texture="gradient-primary" weight="bold">
                            KosPrice
                        </Typography>
                        <div className="w-2 h-6 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full shadow-sm group-hover:animate-pulse"></div>
                    </div>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link 
                        href="/predict" 
                        className="relative group transition-all duration-300 hover:scale-105"
                    >
                        <Typography variant="span" texture="primary" weight="medium" className="group-hover:text-[var(--color-secondary)]">
                            Predict
                        </Typography>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-300)] group-hover:w-full transition-all duration-300 shadow-sm"></span>
                    </Link>
                    <Link 
                        href="/history" 
                        className="relative group transition-all duration-300 hover:scale-105"
                    >
                        <Typography variant="span" texture="primary" weight="medium" className="group-hover:text-[var(--color-secondary)]">
                            History
                        </Typography>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-300)] group-hover:w-full transition-all duration-300 shadow-sm"></span>
                    </Link>
                    <Link 
                        href="/about" 
                        className="relative group transition-all duration-300 hover:scale-105"
                    >
                        <Typography variant="span" texture="primary" weight="medium" className="group-hover:text-[var(--color-secondary)]">
                            About
                        </Typography>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-300)] group-hover:w-full transition-all duration-300 shadow-sm"></span>
                    </Link>
                    
                    {/* Status indicator */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary-600)]/20 border border-[var(--color-secondary-600)]/30">
                        <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse"></span>
                        <Typography variant="small" texture="primary" size="xs" weight="medium">
                            Live
                        </Typography>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 rounded-lg hover:bg-[var(--color-primary-600)]/20 transition-all duration-300 group"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                        <span className={`block h-0.5 w-5 bg-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-secondary)] ${
                            isOpen ? 'rotate-45 translate-y-1.5 w-6' : ''
                        }`}></span>
                        <span className={`block h-0.5 w-5 bg-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-secondary)] ${
                            isOpen ? 'opacity-0' : ''
                        }`}></span>
                        <span className={`block h-0.5 w-5 bg-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-secondary)] ${
                            isOpen ? '-rotate-45 -translate-y-1.5 w-6' : ''
                        }`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--background-light)]/95 backdrop-blur-md border-b border-[var(--color-primary-600)]/20 shadow-lg texture-glass">
                    <div className="px-6 py-6 space-y-4">
                        <Link 
                            href="/predict" 
                            className="block py-3 px-4 rounded-lg hover:bg-[var(--color-primary-600)]/20 transition-all duration-300 hover:scale-105 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <Typography variant="span" texture="primary" weight="medium" className="group-hover:text-[var(--color-secondary)]">
                                Predict
                            </Typography>
                        </Link>
                        <Link 
                            href="/history" 
                            className="block py-3 px-4 rounded-lg hover:bg-[var(--color-primary-600)]/20 transition-all duration-300 hover:scale-105 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <Typography variant="span" texture="primary" weight="medium" className="group-hover:text-[var(--color-secondary)]">
                                History
                            </Typography>
                        </Link>
                        <Link 
                            href="/about" 
                            className="block py-3 px-4 rounded-lg hover:bg-[var(--color-primary-600)]/20 transition-all duration-300 hover:scale-105 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <Typography variant="span" texture="primary" weight="medium" className="group-hover:text-[var(--color-secondary)]">
                                About
                            </Typography>
                        </Link>
                        
                        {/* Mobile status */}
                        <div className="flex items-center justify-center gap-2 mt-4 px-3 py-2 rounded-full bg-[var(--color-secondary-600)]/20 border border-[var(--color-secondary-600)]/30">
                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse"></span>
                            <Typography variant="small" texture="primary" size="xs" weight="medium">
                                System Online
                            </Typography>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}