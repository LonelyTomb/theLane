import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../api';
import {token_chars} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

const authLogin = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
  const response = await API.post('/signin', payload);
  return response.data;
});
const authSignUp = createAsyncThunk(
  'auth/signUp',
  async (payload, thunkAPI) => {
    const response = await API.post('/signup', payload);
    return response.data;
  },
);

const saveToken = async (token) => {
  try {
    await EncryptedStorage.setItem(token_chars, token);
  } catch (err) {
    console.log(err);
  }
};

const getToken = async (token) => {
  try {
    return await EncryptedStorage.getItem(token_chars);
  } catch (err) {
    console.log(err);
    return null;
  }
};
const AuthThunks = {authLogin, saveToken, getToken, authSignUp};

export default AuthThunks;
