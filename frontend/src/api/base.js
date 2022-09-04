import axios from 'axios';

const host = import.meta.env.API_HOST || 'http://localhost:6969';

const api = axios.create({
    baseURL: host,
    timeout: 1000
});

export default api;
