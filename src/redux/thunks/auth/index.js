import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../api';
import {token_chars} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

const authLogin = createAsyncThunk(
  'auth/login',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await API.post('/signin', payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
const authSignUp = createAsyncThunk(
  'auth/signUp',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await API.post('/signup', payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const verifyAuth = createAsyncThunk(
  'auth/verify',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await API.get('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const saveToken = async (token) => {
  try {
    await EncryptedStorage.setItem(token_chars, token);
  } catch (err) {
    console.log(err);
  }
};

const getToken = async () => {
  try {
    return await EncryptedStorage.getItem(token_chars);
  } catch (err) {
    console.log(err);
    return null;
  }
};
const AuthThunks = {authLogin, saveToken, getToken, authSignUp, verifyAuth};

export default AuthThunks;
