import axios from 'axios';

const API = axios.create({
  baseURL: 'https://woqqy.juanosorio.dev/',
  timeout: 10000,
  withCredentials: false, // only if you use cookies
});

// Request interceptor (e.g., for adding auth token)
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or get from context/store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (!response) {
      console.error('Network error');
    } else {
      switch (response.status) {
        case 401:
          console.error('Unauthorized. Maybe redirect to login.');
          break;
        case 403:
          console.error('Forbidden. You do not have permission.');
          break;
        case 404:
          console.error('Resource not found.');
          break;
        case 500:
          console.error('Server error.');
          break;
        default:
          console.error(response.data?.message || 'Something went wrong');
      }
    }
    return Promise.reject(error);
  }
);

export default API;
