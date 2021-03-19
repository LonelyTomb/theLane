import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserAPI} from '../../../api';

const getUser = createAsyncThunk('user/getUser', async (payload, thunkAPI) => {
  const response = await UserAPI.get('/');
  return response.data;
});

const UserThunks = {getUser};

export default UserThunks;
