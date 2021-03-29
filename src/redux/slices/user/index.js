import {createSlice} from '@reduxjs/toolkit';
import {UserThunks, Utils} from '../../thunks';

const {getUser} = UserThunks;
const {errorMessage, loadingState} = Utils;

export const userSlice = createSlice({
  name: 'user',
  initialState: {loading: false, user: null, error: null},
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      loadingState(state, true);
      errorMessage(state, null);
    },
    [getUser.fulfilled]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, null);
      state.user = action.payload.user;
    },
    [getUser.rejected]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, action.error.message);
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
