import axios from "axios";

const baseURL = (import.meta.env.VITE_API_URL || "https://myshop-backend-production1.up.railway.app") + "/api";

const instance = axios.create({
  baseURL,
  withCredentials: false,  // temporarily disabled credentials
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access - possibly expired token');
    }
    return Promise.reject(error);
  }
);

export default instance;
