import {createAsyncThunk} from '@reduxjs/toolkit';
import {NewsAPI} from '../../../api';
import qs from 'query-string';

const topHeadlines = createAsyncThunk(
  'news/topHeadlines',
  async (payload, {rejectWithValue}) => {
    try {
      const query = payload ? `?${qs.stringify(payload)}` : '';
      const response = await NewsAPI.get(`/top-headlines${query}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const everything = createAsyncThunk(
  'news/everything',
  async (payload, {rejectWithValue}) => {
    try {
      const query = payload ? `?${qs.stringify(payload)}` : '';
      const response = await NewsAPI.get(`/everything${query}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const NewsThunks = {topHeadlines, everything};

export default NewsThunks;
