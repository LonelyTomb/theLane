import {createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../api';

const getUser = createAsyncThunk('user/getUser', async (payload, thunkAPI) => {
  const response = await API.get('/');
  return response.data;
});

const UserThunks = {getUser};

export default UserThunks;
