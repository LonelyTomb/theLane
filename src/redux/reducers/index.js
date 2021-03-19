import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './../slices/user';
import authReducer from './../slices/auth';

const appReducers = combineReducers({
  users: userReducer,
  auth: authReducer,
});
const rootReducers = (state, action) => {
  if (action.type === 'RESET_APP') {
    const {loading} = state;
    state = {loading};
  }

  return appReducers(state, action);
};
export default rootReducers;
