import axios from 'axios';

const endpoints = {
  local: 'http://172.17.0.1:3000',
  deploy: 'https://apissmokee.herokuapp.com',
};

export const api = axios.create({
  baseURL: endpoints.deploy,
});
