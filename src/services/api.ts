import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://homolog.grupogaia.com.br/prova/front/api/clients'
});

export default api;

//https://cors-anywhere.herokuapp.com/