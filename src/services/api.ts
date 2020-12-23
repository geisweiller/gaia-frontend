import axios from 'axios';

const api = axios.create({
  baseURL: 'http://homolog.grupogaia.com.br/prova/front/api/clients'
});

export default api;
