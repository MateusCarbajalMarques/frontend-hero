import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-the-hero.herokuapp.com',
})

export default api;