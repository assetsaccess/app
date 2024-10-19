import axios from 'axios';
import { setAuthHeader } from './authUtils';

const axiosInstance = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api', // Adjust the base URL as needed
    baseURL: 'https://backend.assetsaccess.xyz/api',
    headers: setAuthHeader()
});

// Optionally, you can add interceptors to handle requests and responses
axiosInstance.interceptors.request.use(
    (config) => {
        // You can modify the request config before sending it
        config.headers = setAuthHeader(config.headers);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

export default axiosInstance;