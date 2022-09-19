import axios from 'axios';

const host = import.meta.env.VITE_API_HOST || 'http://localhost:6969';

const api = axios.create({
    baseURL: host,
    timeout: 10000
});

export default api;

