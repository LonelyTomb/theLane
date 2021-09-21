import axios from 'axios';
import {API_URL, token_chars} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

const API = axios.create({
  baseURL: `${API_URL}`,
});

API.interceptors.request.use(
  async (configs) => {
    const config = configs;
    const token = await EncryptedStorage.getItem(token_chars);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.token = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default API;
