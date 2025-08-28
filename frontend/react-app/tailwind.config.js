/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // 🎨 KOSRICE SOFT & GENTLE THEME
        // Primary: Soft Blue-Purple (Gentle, trustworthy)
        primary: {
          50: '#f8faff',    // Very soft blue tint
          100: '#f0f4ff',   // Ultra light blue-purple
          200: '#e4e9ff',   // Soft blue-purple
          300: '#d1d9ff',   // Light blue-purple
          400: '#b8c5ff',   // Medium-light blue-purple
          500: '#9ca3ff',   // Soft vibrant blue-purple
          600: '#7c7dff',   // Main primary - Gentle blue-purple
          700: '#6366f1',   // Deeper but still soft
          800: '#5855d6',   // Rich but muted
          900: '#4c46a3',   // Deep muted purple
          DEFAULT: '#7c7dff' // Soft primary brand
        },
        
        // Secondary: Warm soft grays
        secondary: {
          50: '#fafbfc',    // Warm white
          100: '#f4f6f8',   // Very light warm gray
          200: '#e8ecf0',   // Light warm gray
          300: '#d7dde3',   // Soft gray
          400: '#b0bac7',   // Medium soft gray
          500: '#8892a0',   // Main secondary - Soft balanced gray
          600: '#6b7785',   // Muted gray
          700: '#515b6b',   // Deep soft gray
          800: '#3d4651',   // Dark soft gray
          900: '#2a3138',   // Darkest soft gray
          DEFAULT: '#8892a0' // Soft secondary
        },
        
        // Accent: Soft Golden Yellow (Warm, welcoming)
        accent: {
          50: '#fffdf7',    // Cream white
          100: '#fef8e7',   // Very light cream
          200: '#fdefc4',   // Soft cream
          300: '#fce085',   // Light golden
          400: '#fbcd4a',   // Soft golden
          500: '#f5b82e',   // Main accent - Soft warm gold
          600: '#e09d1a',   // Gentle orange-gold
          700: '#c87f15',   // Muted deep gold
          800: '#a86318',   // Soft bronze
          900: '#8b4513',   // Warm brown-gold
          DEFAULT: '#f5b82e' // Soft accent
        },
        
        // Highlight: Gentle Sunshine Yellow
        highlight: {
          50: '#fffef5',    // Soft cream
          100: '#fffbea',   // Light cream
          200: '#fff4c4',   // Gentle yellow
          300: '#ffe994',   // Soft sunshine
          400: '#ffdb5c',   // Medium soft yellow
          500: '#ffc93c',   // Main highlight - Gentle sunshine
          600: '#f0b429',   // Soft orange-yellow
          700: '#d49a1d',   // Muted golden
          800: '#b8801a',   // Gentle bronze
          900: '#996817',   // Soft brown-gold
          DEFAULT: '#ffc93c' // Soft highlight
        },
        
        // Success: Soft Fresh Green
        success: {
          50: '#f6fdf9',    // Very light mint
          100: '#ecfbf2',   // Light mint
          200: '#d1f7e3',   // Soft mint green
          300: '#a7f0c8',   // Light fresh green
          400: '#6ee7a8',   // Medium soft green
          500: '#4dd688',   // Main success - Soft fresh green
          600: '#3cc46f',   // Gentle green
          700: '#32a85c',   // Muted green
          800: '#2d8a4c',   // Deep soft green
          900: '#26723f',   // Dark muted green
          DEFAULT: '#4dd688' // Soft success
        },
        
        // Warning: Soft Peach-Orange
        warning: {
          50: '#fffbf5',    // Very light peach
          100: '#fff4e6',   // Light peach
          200: '#ffe4c4',   // Soft peach
          300: '#ffce8a',   // Medium peach
          400: '#ffb347',   // Vibrant soft orange
          500: '#ff9a1f',   // Main warning - Soft warm orange
          600: '#e8841c',   // Gentle orange
          700: '#d16d19',   // Muted orange
          800: '#b85818',   // Deep soft orange
          900: '#9a4717',   // Dark muted orange
          DEFAULT: '#ff9a1f' // Soft warning
        },
        
        // Error: Soft Rose-Red
        error: {
          50: '#fef7f7',    // Very light rose
          100: '#feebeb',   // Light rose
          200: '#fdd8d8',   // Soft rose
          300: '#fcb3b3',   // Medium soft red
          400: '#f87f7f',   // Vibrant soft red
          500: '#f56565',   // Main error - Soft red
          600: '#e53e3e',   // Gentle red
          700: '#c53030',   // Muted red
          800: '#9c2626',   // Deep soft red
          900: '#742a2a',   // Dark muted red
          DEFAULT: '#e53e3e' // Soft error
        },
        
        // Text colors (Softer, easier on eyes)
        text: {
          primary: '#2d3748',     // Soft dark gray (main content)
          secondary: '#4a5568',   // Medium soft gray (secondary)
          light: '#718096',       // Light soft gray (muted)
          white: '#ffffff',       // Pure white
          dark: '#1a202c',        // Soft dark (dark mode)
          DEFAULT: '#2d3748'      // Soft default text
        },
        
        // Background colors (Gentle, comfortable)
        background: {
          primary: '#ffffff',     // Pure white
          secondary: '#fafbfc',   // Very soft gray
          tertiary: '#f4f6f8',    // Light soft gray
          dark: '#1a202c',        // Soft dark (dark mode)
          'dark-secondary': '#2d3748', // Dark mode secondary
          'dark-tertiary': '#4a5568',  // Dark mode tertiary
          DEFAULT: '#ffffff'      // Default background
        }
      },
      // 🎨 Soft & gentle gradients untuk KosPrice
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        
        // Soft brand gradients (Gentle blue-purple)
        'gradient-brand': 'linear-gradient(135deg, #7c7dff 0%, #9ca3ff 50%, #b8c5ff 100%)', 
        'gradient-brand-dark': 'linear-gradient(135deg, #4c46a3 0%, #5855d6 50%, #6366f1 100%)',
        
        // Gentle highlight gradients
        'gradient-highlight': 'linear-gradient(135deg, #f5b82e 0%, #ffc93c 100%)', 
        'gradient-highlight-soft': 'linear-gradient(135deg, #fbcd4a 0%, #f5b82e 50%, #ffc93c 100%)',
        
        // Soft success gradients
        'gradient-success': 'linear-gradient(135deg, #4dd688 0%, #3cc46f 100%)', 
        
        // Gentle header gradients
        'gradient-header': 'linear-gradient(135deg, #7c7dff 0%, #9ca3ff 30%, #f5b82e 100%)', 
        'gradient-header-dark': 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)',
        
        // Soft page backgrounds
        'gradient-page': 'linear-gradient(135deg, #ffffff 0%, #fafbfc 50%, #f4f6f8 100%)', 
        'gradient-page-dark': 'linear-gradient(135deg, #1a202c 0%, #2d3748 30%, #4a5568 100%)',
        
        // Gentle card gradients
        'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
        'gradient-card-dark': 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
        
        // Soft interactive gradients
        'gradient-interactive': 'linear-gradient(135deg, #7c7dff 0%, #f5b82e 100%)',
        'gradient-interactive-hover': 'linear-gradient(135deg, #6366f1 0%, #e09d1a 100%)',
        
        // Dreamy pastel gradients
        'gradient-dreamy': 'linear-gradient(135deg, #b8c5ff 0%, #ffc93c 50%, #4dd688 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ffc93c 0%, #ff9a1f 50%, #f56565 100%)'
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

