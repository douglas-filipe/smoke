import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://apissmokee.herokuapp.com',
});
