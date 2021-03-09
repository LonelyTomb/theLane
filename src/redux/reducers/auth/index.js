import types from '../../actions/auth/types';

const initialState = {
  loading: false,
  user: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_PENDING:
      return {...state, loading: action.loading};
    case types.LOGIN_SUCCESS:
      return {...state, loading: action.loading, user: action.user};
    case types.LOGIN_FAILED:
      return {...state, loading: action.loading, error: action.error};

    case types.FORGOT_PASSWORD_PENDING:
      return {...state, loading: action.loading};
    case types.FORGOT_PASSWORD_SUCCESS:
      return {...state, loading: action.loading};
    case types.FORGOT_PASSWORD_FAILED:
      return {...state, loading: action.loading, error: action.error};

    case types.VERIFY_RESET_CODE_PENDING:
      return {...state, loading: action.loading};
    case types.VERIFY_RESET_CODE_SUCCESS:
      return {...state, loading: action.loading};
    case types.VERIFY_RESET_CODE_FAILED:
      return {...state, loading: action.loading, error: action.error};

    case types.RESET_PASSWORD_PENDING:
      return {...state, loading: action.loading};
    case types.RESET_PASSWORD_SUCCESS:
      return {...state, loading: action.loading};
    case types.RESET_PASSWORD_FAILED:
      return {...state, loading: action.loading, error: action.error};

    case types.REGISTER_PENDING:
      return {...state, loading: action.loading};
    case types.REGISTER_SUCCESS:
      return {...state, loading: action.loading, user: action.user};
    case types.REGISTER_FAILED:
      return {...state, loading: action.loading, error: action.error};

    case types.FETCH_CURRENT_USER_PENDING:
      return {...state, loading: action.loading};
    case types.FETCH_CURRENT_USER_SUCCESS:
      return {...state, loading: action.loading, user: action.user};
    case types.FETCH_CURRENT_USER_FAILED:
      return {...state, loading: action.loading, error: action.error};

    case types.SAVE_USER_PROFILE_PENDING:
      return {...state, loading: action.loading};
    case types.SAVE_USER_PROFILE_SUCCESS:
      return {...state, loading: action.loading, user: action.user};
    case types.SAVE_USER_PROFILE_FAILED:
      return {...state, loading: action.loading, error: action.error};

    default:
      return state;
  }
};
