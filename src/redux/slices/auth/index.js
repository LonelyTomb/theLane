import {createSlice} from '@reduxjs/toolkit';
import {AuthThunks, Utils} from '../../thunks';

const {authLogin, saveToken, authSignUp} = AuthThunks;
const {errorMessage, loadingState} = Utils;

export const authSlice = createSlice({
  name: 'auth',
  initialState: {loading: false, error: null, isLoggedIn: false},
  reducers: {
    loadingState,
  },
  extraReducers: {
    [authLogin.pending]: (state) => {
      loadingState(state, true);
      errorMessage(state, null);
    },
    [authLogin.fulfilled]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, null);
      const {token} = action.payload;
      state.isLoggedIn = true;
      saveToken(token);
    },
    [authLogin.rejected]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, null);
      state.error = action.error.message;
    },
    [authSignUp.pending]: (state) => {
      loadingState(state, true);
      errorMessage(state, null);
    },
    [authSignUp.fulfilled]: (state, action) => {
      loadingState(state, false);
      errorMessage(state, null);

      const {token} = action.payload;
      state.isLoggedIn = true;
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
