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

// Gradient Colors
export const GRADIENTS = {
  PRIMARY: 'from-blue-500 to-indigo-500',
  SECONDARY: 'from-purple-500 to-pink-500',
  SUCCESS: 'from-green-500 to-emerald-500',
  WARNING: 'from-yellow-500 to-orange-500',
  ERROR: 'from-red-500 to-pink-500',
  INFO: 'from-blue-500 to-cyan-500'
};

// Statistics Data
export const STATS_DATA = {
  PREDICTIONS: 0,
  USERS: 0,
  ACCURACY: 0,
  LOCATIONS: 0
};