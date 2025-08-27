import { API_ENDPOINTS } from './constants'; // Fix: Remove HTTP_STATUS

// Base API configuration
const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  }
};

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.baseURL}${endpoint}`;
  
  const config = {
    method: 'GET',
    headers: API_CONFIG.headers,
    timeout: API_CONFIG.timeout,
    ...options
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout);

    const response = await fetch(url, {
      ...config,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, data, status: response.status };

  } catch (error) {
    console.error(`API Error for ${endpoint}:`, error);
    
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - Server tidak merespon');
    }
    
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Koneksi gagal - Pastikan server backend berjalan');
    }
    
    throw error;
  }
};

// API Methods
export const api = {
  // Prediction methods
  predict: async (data) => {
    return apiCall(API_ENDPOINTS.PREDICT, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  // History methods  
  getHistory: async () => {
    return apiCall(API_ENDPOINTS.HISTORY);
  },

  saveHistory: async (data) => {
    return apiCall(API_ENDPOINTS.HISTORY, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  deleteHistory: async (id) => {
    return apiCall(`${API_ENDPOINTS.HISTORY}/${id}`, {
      method: 'DELETE'
    });
  },

  // Health check
  healthCheck: async () => {
    return apiCall(API_ENDPOINTS.HEALTH);
  },

  // Model info
  getModelInfo: async () => {
    return apiCall(API_ENDPOINTS.MODEL_INFO);
  }
};

// Export default for convenience
export default api;