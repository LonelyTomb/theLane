import {createSlice} from '@reduxjs/toolkit';
import {NewsThunks, Utils} from '../../thunks';

const {topHeadlines, loadEverything, loadSources} = NewsThunks;
const {errorMessage, loadingState} = Utils;

export const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export const newsSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    headlines: {
      articles: [],
    },
    everything: {
      articles: [],
    },
    categories,
    sources: [],
  },
  reducers: {},
  extraReducers: {
    [topHeadlines.pending]: (state) => {
      loadingState(state, true);
      errorMessage(state, null);
    },
    [topHeadlines.fulfilled]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, null);
      state.headlines = {...action.payload};
    },
    [topHeadlines.rejected]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, action.payload);
    },
    [loadEverything.pending]: (state) => {
      loadingState(state, true);
      errorMessage(state, null);
    },
    [loadEverything.fulfilled]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, null);
      state.everything = {...action.payload};
    },
    [loadEverything.rejected]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, action.payload);
    },
    [loadSources.pending]: (state) => {
      loadingState(state, true);
      errorMessage(state, null);
    },
    [loadSources.fulfilled]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, null);
      state.sources = [...action.payload.sources];
    },
    [loadSources.rejected]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, action.payload);
    },
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
