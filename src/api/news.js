import axios from 'axios';
import {NEWS_API_URL, NEWS_API_KEY} from '@env';

const API = axios.create({
  baseURL: `${NEWS_API_URL}`,
});

API.interceptors.request.use(
  async (configs) => {
    const config = configs;
    if (NEWS_API_KEY) {
      config.headers.Authorization = `${NEWS_API_URL}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default API;
