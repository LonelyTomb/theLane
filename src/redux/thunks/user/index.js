import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserAPI} from '../../../api';

const getUser = createAsyncThunk(
  'user/getUser',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await UserAPI.get('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const UserThunks = {getUser};

export default UserThunks;
