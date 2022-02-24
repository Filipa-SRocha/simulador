import axios from 'axios';

//criar uma instancia
const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

export default api;
