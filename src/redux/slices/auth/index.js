import {createSlice} from '@reduxjs/toolkit';
import {AuthThunks} from '../../thunks';

const {authLogin, saveToken, authSignUp} = AuthThunks;
const loadingState = (state, payload) => {
  state.loading = payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {loading: false, error: null},
  reducers: {
    loadingState,
  },
  extraReducers: {
    [authLogin.pending]: (state) => {
      loadingState(state, true);
    },
    [authLogin.fulfilled]: (state, action) => {
      loadingState(state, false);
      const {token} = action.payload;
      saveToken(token);
    },
    [authLogin.rejected]: (state, action) => {
      loadingState(state, false);
      state.error = action.error.message;
    },
    [authSignUp.pending]: (state) => {
      loadingState(state, true);
    },
    [authSignUp.fulfilled]: (state, action) => {
      loadingState(state, false);
      const {token} = action.payload;
      saveToken(token);
    },
    [authSignUp.rejected]: (state, action) => {
      loadingState(state, false);
      state.error = action.error.message;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
