import {useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {token_chars} from '@env';

export default () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const getToken = async () => {
    const response = await EncryptedStorage.getItem(token_chars);
    setToken(response);
    setLoading(false);
  };
  useEffect(() => {
    getToken();
  }, []);
  return [loading, token, getToken];
};
