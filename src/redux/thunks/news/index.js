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

const loadEverything = createAsyncThunk(
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

const loadSources = createAsyncThunk(
  'news/sources',
  async (payload, {rejectWithValue}) => {
    try {
      const query = payload ? `?${qs.stringify(payload)}` : '';
      const response = await NewsAPI.get(`/sources${query}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const NewsThunks = {topHeadlines, loadEverything, loadSources};

export default NewsThunks;
