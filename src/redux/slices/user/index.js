import {createSlice} from '@reduxjs/toolkit';
import {UserThunks} from '../../thunks';

const {getUser} = UserThunks;
const loadingState = (state, payload) => {
  state.loading = payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {loading: false, user: {}},
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      loadingState(state, true);
    },
    [getUser.fulfilled]: (state, action) => {
      loadingState(state, false);
      const {user} = action.payload;
      state.user = {...user};
    },
    [getUser.rejected]: (state, action) => {
      loadingState(state, false);
      state.error = action.error.message;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
