import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT,
} from '../actions_type/login';

const defaultState = {
  loadingApp: true,
  loading: false,
  isLogin: false,
  user_id: null,
  accessToken: null,
};

const login = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, loading: true };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state, isLogin: true, loading: false, ...action.payload,
      };
    }

    case LOGIN_FAILED: {
      return { ...state, loading: false };
    }

    case LOGOUT: {
      return { ...state, isLogin: false };
    }

    default:
      return state;
  }
};

export default login;
