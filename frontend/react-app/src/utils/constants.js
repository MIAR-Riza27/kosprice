// API Endpoints
export const API_ENDPOINTS = {
  PREDICT: '/predict',
  HISTORY: '/history', 
  HEALTH: '/health',
  MODEL_INFO: '/model/info'
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

// Toast Types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Pages
export const PAGES = {
  HOME: 'home',
  PREDICT: 'predict', 
  HISTORY: 'history',
  ABOUT: 'about'
};

// App Configuration
export const APP_CONFIG = {
  NAME: 'KosPrice',
  VERSION: '2.0.0',
  DESCRIPTION: 'AI-Powered Kos Price Prediction Platform',
  AUTHOR: 'KosPrice Team'
};

// Form Validation
export const VALIDATION = {
  MIN_AREA: 1,
  MAX_AREA: 1000,
  MIN_ROOMS: 1,
  MAX_ROOMS: 50,
  MIN_DISTANCE: 0.1,
  MAX_DISTANCE: 100
};

// Animation Durations (ms)
export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  EXTRA_SLOW: 700
};

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme',
  HISTORY: 'prediction_history',
  USER_PREFERENCES: 'user_preferences'
};

// Theme Options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Koneksi jaringan bermasalah',
  SERVER_ERROR: 'Server sedang bermasalah',
  VALIDATION_ERROR: 'Data yang dimasukkan tidak valid',
  TIMEOUT_ERROR: 'Request timeout - Server tidak merespon',
  UNKNOWN_ERROR: 'Terjadi kesalahan yang tidak diketahui'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  PREDICTION_SUCCESS: 'Prediksi berhasil dibuat',
  HISTORY_SAVED: 'Riwayat berhasil disimpan',
  HISTORY_DELETED: 'Riwayat berhasil dihapus',
  DATA_LOADED: 'Data berhasil dimuat'
};

// Default Values
export const DEFAULTS = {
  TOAST_DURATION: 5000,
  DEBOUNCE_DELAY: 300,
  PAGINATION_SIZE: 10,
  ANIMATION_DELAY_STEP: 100
};

// Gradient Colors - Berdasarkan warna yang sudah terpakai
export const GRADIENTS = {
  // Primary gradients yang sudah digunakan
  PRIMARY: 'from-primary-500 to-primary-600',
  BRAND: 'from-primary-600 via-accent-600 to-primary-800',
  HEADER: 'from-primary-600 via-purple-600 to-indigo-600',
  
  // Accent gradients
  ACCENT: 'from-accent-500 to-accent-600',
  PURPLE_PINK: 'from-purple-500 to-pink-500',
  
  // Highlight gradients
  HIGHLIGHT: 'from-highlight-300 to-warning-400',
  YELLOW_ORANGE: 'from-yellow-400 to-orange-400',
  
  // Status gradients
  SUCCESS: 'from-success-500 to-success-600',
  WARNING: 'from-warning-500 to-warning-600',
  ERROR: 'from-error-500 to-error-600',
  INFO: 'from-primary-500 to-primary-600',
  
  // Background gradients
  PAGE_LIGHT: 'from-gray-50 via-blue-50 to-indigo-100',
  PAGE_DARK: 'from-gray-900 via-slate-900 to-indigo-950',
  CARD: 'from-background-primary to-background-secondary',
  
  // Interactive gradients
  BUTTON_PRIMARY: 'from-primary-500 to-accent-500',
  BUTTON_SECONDARY: 'from-secondary-500 to-secondary-600',
  HOVER_LIGHT: 'from-primary-400/10 to-accent/10',
  HOVER_HIGHLIGHT: 'from-highlight-300/20 to-warning-400/20'
};

// Theme Colors - Mapping ke custom colors
export const THEME_COLORS = {
  // Brand colors
  BRAND_PRIMARY: '#2563eb',      // primary-600
  BRAND_ACCENT: '#a855f7',       // accent-500
  BRAND_HIGHLIGHT: '#fcd34d',    // highlight-300
  
  // Text colors
  TEXT_PRIMARY: '#1f2937',       // text-primary
  TEXT_SECONDARY: '#6b7280',     // text-secondary
  TEXT_LIGHT: '#9ca3af',         // text-light
  
  // Background colors
  BG_PRIMARY: '#ffffff',         // background-primary
  BG_SECONDARY: '#f8fafc',       // background-secondary
  BG_TERTIARY: '#f1f5f9',        // background-tertiary
  
  // Status colors
  SUCCESS: '#10b981',            // success-500
  WARNING: '#fb923c',            // warning-400
  ERROR: '#ef4444',              // error-500
  INFO: '#3b82f6'                // primary-500
};

// Component specific color mappings
export const COMPONENT_COLORS = {
  NAVBAR: {
    bg: 'from-primary-600 via-primary-700 to-primary-800',
    active: 'from-highlight-400 to-warning-400',
    logo: 'text-highlight-300',
    wave: 'from-primary-400 via-accent to-primary-400'
  },
  BUTTON: {
    primary: 'bg-primary-600 hover:bg-primary-700',
    accent: 'bg-accent-500 hover:bg-accent-600', 
    success: 'bg-success-500 hover:bg-success-600',
    warning: 'bg-warning-500 hover:bg-warning-600',
    error: 'bg-error-500 hover:bg-error-600'
  },
  CARD: {
    bg: 'bg-background-primary/80',
    border: 'border-secondary-200/50',
    shadow: 'shadow-xl'
  },
  STATISTICS: {
    predictions: 'from-primary to-primary-600',
    users: 'from-secondary-600 to-secondary-700',
    accuracy: 'from-accent to-accent-600',
    locations: 'from-success to-success-600'
  }
};

// Statistics Data
export const STATS_DATA = {
  PREDICTIONS: 0,
  USERS: 0,
  ACCURACY: 0,
  LOCATIONS: 0
};