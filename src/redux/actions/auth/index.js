import API from '../../../api';
// import jwtDecode from 'jwt-decode';
import types from './types';
import EncryptedStorage from 'react-native-encrypted-storage';
import {token_chars} from '@env';

export default class AuthActions {
  static register(payload) {
    return (dispatch) => {
      dispatch({
        type: types.REGISTER_PENDING,
        loading: true,
        error: null,
      });
      return API.post('/signup', payload)
        .then(async (response) => {
          const {token, user} = response.data.data;
          await EncryptedStorage.setItem(token_chars, token);
          dispatch({
            type: types.REGISTER_SUCCESS,
            loading: false,
            user,
          });
        })
        .then(async () => {
          return true;
        })
        .catch(async (error) => {
          const {message} = error.response.data;
          dispatch({
            type: types.REGISTER_FAILED,
            loading: false,
            error: error.response && error.response.data.data,
          });
          throw new Error(message);
        });
    };
  }

  static login(payload) {
    return (dispatch) => {
      dispatch({
        type: types.LOGIN_PENDING,
        loading: true,
        error: null,
      });
      return API.post('/signin', payload)
        .then((response) => {
          const {token, user} = response.data.data;
          window.localStorage.setItem('__token', token);
          dispatch({
            type: types.LOGIN_SUCCESS,
            loading: false,
            user,
          });
          return response;
        })
        .then(async (response) => {
          return response;
        })
        .catch((error) => {
          const {message} = error.response.data;
          dispatch({
            type: types.LOGIN_FAILED,
            loading: false,
            error: error.response && error.response.data.message,
          });
          throw new Error(message);
        });
    };
  }

  // static getCurrentUser() {
  //   return (dispatch) => {
  //     dispatch({
  //       type: types.FETCH_CURRENT_USER_PENDING,
  //       loading: true,
  //       error: null,
  //     });
  //     const token = window.localStorage.getItem('__token');
  //     let id = '';
  //     if (token) {
  //       const {user} = jwtDecode(token);
  //       id = user && user.id;
  //     }
  //     return API.get(`/users/${id}`)
  //       .then((response) => {
  //         const user = response.data.data;
  //         user.id = id;
  //         dispatch({
  //           type: types.FETCH_CURRENT_USER_SUCCESS,
  //           loading: false,
  //           user,
  //         });
  //         return response;
  //       })
  //       .then(async (response) => {
  //         return response;
  //       })
  //       .catch((error) => {
  //         const {message} = error.response.data;
  //         dispatch({
  //           type: types.FETCH_CURRENT_USER_FAILED,
  //           loading: false,
  //           error: error.response && error.response.data.message,
  //         });
  //         return new Error(message);
  //       });
  //   };
  // }
}
