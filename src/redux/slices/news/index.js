import {createSlice} from '@reduxjs/toolkit';
import {NewsThunks, Utils} from '../../thunks';

const {topHeadlines} = NewsThunks;
const {errorMessage, loadingState} = Utils;

export const newsSlice = createSlice({
  name: 'user',
  initialState: {loading: false, headlines: {articles: []}},
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
      errorMessage(state, null);
    },
  },
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
