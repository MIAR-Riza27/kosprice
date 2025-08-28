/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // KosPrice Brand Colors - Berdasarkan warna yang sudah terpakai
        primary: {
          50: '#eff6ff',    // blue-50
          100: '#dbeafe',   // blue-100
          200: '#bfdbfe',   // blue-200
          300: '#93c5fd',   // blue-300
          400: '#60a5fa',   // blue-400
          500: '#3b82f6',   // blue-500 - Main primary
          600: '#2563eb',   // blue-600 - Primary brand
          700: '#1d4ed8',   // blue-700
          800: '#1e3a8a',   // blue-800
          900: '#1e293b',   // blue-900
          DEFAULT: '#2563eb'
        },
        secondary: {
          50: '#f8fafc',    // slate-50
          100: '#f1f5f9',   // slate-100
          200: '#e2e8f0',   // slate-200
          300: '#cbd5e1',   // slate-300
          400: '#94a3b8',   // slate-400
          500: '#64748b',   // slate-500
          600: '#475569',   // slate-600
          700: '#334155',   // slate-700
          800: '#1e293b',   // slate-800
          900: '#0f172a',   // slate-900
          DEFAULT: '#64748b'
        },
        accent: {
          50: '#faf5ff',    // purple-50
          100: '#f3e8ff',   // purple-100
          200: '#e9d5ff',   // purple-200
          300: '#d8b4fe',   // purple-300
          400: '#c084fc',   // purple-400
          500: '#a855f7',   // purple-500 - Main accent
          600: '#9333ea',   // purple-600
          700: '#7c3aed',   // purple-700
          800: '#6b21a8',   // purple-800
          900: '#581c87',   // purple-900
          DEFAULT: '#a855f7'
        },
        highlight: {
          50: '#fffbeb',    // yellow-50
          100: '#fef3c7',   // yellow-100
          200: '#fde68a',   // yellow-200
          300: '#fcd34d',   // yellow-300 - Main highlight
          400: '#fbbf24',   // yellow-400
          500: '#f59e0b',   // yellow-500
          600: '#d97706',   // yellow-600
          700: '#b45309',   // yellow-700
          800: '#92400e',   // yellow-800
          900: '#78350f',   // yellow-900
          DEFAULT: '#fcd34d'
        },
        success: {
          50: '#ecfdf5',    // green-50
          100: '#d1fae5',   // green-100
          200: '#a7f3d0',   // green-200
          300: '#6ee7b7',   // green-300
          400: '#34d399',   // green-400
          500: '#10b981',   // green-500 - Main success
          600: '#059669',   // green-600
          700: '#047857',   // green-700
          800: '#065f46',   // green-800
          900: '#064e3b',   // green-900
          DEFAULT: '#10b981'
        },
        warning: {
          50: '#fffbeb',    // orange-50
          100: '#fef3c7',   // orange-100
          200: '#fed7aa',   // orange-200
          300: '#fdba74',   // orange-300
          400: '#fb923c',   // orange-400 - Main warning
          500: '#f97316',   // orange-500
          600: '#ea580c',   // orange-600
          700: '#c2410c',   // orange-700
          800: '#9a3412',   // orange-800
          900: '#7c2d12',   // orange-900
          DEFAULT: '#fb923c'
        },
        error: {
          50: '#fef2f2',    // red-50
          100: '#fee2e2',   // red-100
          200: '#fecaca',   // red-200
          300: '#fca5a5',   // red-300
          400: '#f87171',   // red-400
          500: '#ef4444',   // red-500 - Main error
          600: '#dc2626',   // red-600
          700: '#b91c1c',   // red-700
          800: '#991b1b',   // red-800
          900: '#7f1d1d',   // red-900
          DEFAULT: '#ef4444'
        },
        // Extended colors untuk kombinasi gradient yang sudah terpakai
        'blue-purple': {
          'from': '#3b82f6',  // blue-500
          'to': '#a855f7'     // purple-500
        },
        'yellow-orange': {
          'from': '#fcd34d',  // yellow-300
          'to': '#fb923c'     // orange-400
        },
        'purple-pink': {
          'from': '#a855f7',  // purple-500
          'to': '#ec4899'     // pink-500
        },
        // Text colors
        text: {
          primary: '#1f2937',     // gray-800
          secondary: '#6b7280',   // gray-500
          light: '#9ca3af',       // gray-400
          white: '#ffffff',
          DEFAULT: '#1f2937'
        },
        // Background colors
        background: {
          primary: '#ffffff',
          secondary: '#f8fafc',   // slate-50
          tertiary: '#f1f5f9',    // slate-100
          dark: '#0f172a',        // slate-900
          DEFAULT: '#ffffff'
        }
      },
      // Gradient combinations yang sudah terpakai
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #2563eb 0%, #a855f7 50%, #1d4ed8 100%)',
        'gradient-highlight': 'linear-gradient(135deg, #fcd34d 0%, #fb923c 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-header': 'linear-gradient(135deg, #2563eb 0%, #9333ea 50%, #1d4ed8 100%)',
        'gradient-page': 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%)',
        'gradient-page-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #312e81 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}

