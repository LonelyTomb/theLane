import {createAsyncThunk} from '@reduxjs/toolkit';
import {NewsAPI} from '../../../api';
import qs from 'query-string';

const topHeadlines = createAsyncThunk(
  'news/topHeadlines',
  async (query, {rejectWithValue}) => {
    try {
      const response = await NewsAPI.get(
        `/top-headlines${query && `?q=${qs.stringify(query)}`}`,
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const NewsThunks = {topHeadlines};

export default NewsThunks;
