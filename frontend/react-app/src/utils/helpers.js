import { STORAGE_KEYS, VALIDATION, THEMES } from './constants';

// Format currency to Indonesian Rupiah
export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return 'Rp 0';
  
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// Format number with thousand separators
export const formatNumber = (number) => {
  if (typeof number !== 'number') return '0';
  return number.toLocaleString('id-ID');
};

// Validate form input
export const validatePredictionInput = (data) => {
  const errors = {};
  
  // Validate area
  if (!data.luas_m2 || data.luas_m2 < VALIDATION.MIN_AREA || data.luas_m2 > VALIDATION.MAX_AREA) {
    errors.luas_m2 = `Luas harus antara ${VALIDATION.MIN_AREA} - ${VALIDATION.MAX_AREA} m²`;
  }
  
  // Validate rooms
  if (!data.jumlah_kamar || data.jumlah_kamar < VALIDATION.MIN_ROOMS || data.jumlah_kamar > VALIDATION.MAX_ROOMS) {
    errors.jumlah_kamar = `Jumlah kamar harus antara ${VALIDATION.MIN_ROOMS} - ${VALIDATION.MAX_ROOMS}`;
  }
  
  // Validate distance
  if (!data.jarak_kampus_km || data.jarak_kampus_km < VALIDATION.MIN_DISTANCE || data.jarak_kampus_km > VALIDATION.MAX_DISTANCE) {
    errors.jarak_kampus_km = `Jarak harus antara ${VALIDATION.MIN_DISTANCE} - ${VALIDATION.MAX_DISTANCE} km`;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Local Storage helpers
export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      return false;
    }
  },
  
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to get from localStorage:', error);
      return defaultValue;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Failed to remove from localStorage:', error);
      return false;
    }
  },
  
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
      return false;
    }
  }
};

// Theme helpers
export const themeHelpers = {
  getSystemTheme: () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
  },
  
  getSavedTheme: () => {
    return storage.get(STORAGE_KEYS.THEME, THEMES.SYSTEM);
  },
  
  applyTheme: (theme) => {
    const actualTheme = theme === THEMES.SYSTEM ? themeHelpers.getSystemTheme() : theme;
    
    if (actualTheme === THEMES.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    storage.set(STORAGE_KEYS.THEME, theme);
    return actualTheme;
  }
};

// Debounce function
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Capitalize first letter
export const capitalize = (str) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Get page title
export const getPageTitle = (page) => {
  const titles = {
    home: 'Beranda',
    predict: 'Prediksi Harga',
    history: 'Riwayat Prediksi',
    about: 'Tentang Kami'
  };
  return titles[page] || 'KosPrice';
};

// Animate count up
export const animateCountUp = (start, end, duration, callback) => {
  const startTime = Date.now();
  const range = end - start;
  
  const timer = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = start + (range * easeOut);
    
    callback(current);
    
    if (progress === 1) {
      clearInterval(timer);
      callback(end); // Ensure final value is exact
    }
  }, 16); // ~60fps
  
  return timer;
};

// Parse form data to numbers
export const parseFormData = (data) => {
  return {
    luas_m2: parseFloat(data.luas_m2) || 0,
    jumlah_kamar: parseInt(data.jumlah_kamar) || 0,
    jarak_kampus_km: parseFloat(data.jarak_kampus_km) || 0
  };
};

// Format date
export const formatDate = (date) => {
  if (!date) return '';
  
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
};

// Check if mobile device
export const isMobile = () => {
  return window.innerWidth < 768;
};

// Smooth scroll to element
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Copy to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

// Get error message
export const getErrorMessage = (error) => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  return 'Terjadi kesalahan yang tidak diketahui';
};