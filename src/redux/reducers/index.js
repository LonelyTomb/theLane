import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './../slices/user';
import authReducer from './../slices/auth';
import newsReducer from './../slices/news';

const appReducers = combineReducers({
  users: userReducer,
  auth: authReducer,
  news: newsReducer,
});
const rootReducers = (state, action) => {
  if (action.type === 'RESET_APP') {
    const {loading} = state;
    state = {loading};
  }

  return appReducers(state, action);
};
export default rootReducers;
