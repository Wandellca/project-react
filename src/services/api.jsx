import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseat-node.herokouapp.com/api' });
export default api;