import {useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {token_chars} from '@env';
import {useSelector} from 'react-redux';

export default () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const {isLoggedIn} = useSelector((state) => state.auth);
  const getToken = async () => {
    const response = await EncryptedStorage.getItem(token_chars);
    setToken(response);
    setLoading(false);
  };
  useEffect(() => {
    getToken();
  }, [isLoggedIn]);
  return [loading, token, getToken, isLoggedIn];
};
