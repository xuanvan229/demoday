import {
  takeLatest, put, all, fork,
} from 'redux-saga/effects';
import { notification } from 'antd';
import { LOGIN } from '../actions_type/login';
import * as actions from '../actions/login';
import { post } from '../../services/api';

const loginAPI = (data) => {
  const url = '/users/sign_in';
  return post({ url, data });
};

function* submitLogin(action) {
  // const { email, password } = action.payload;
  try {
    const result = yield loginAPI(action.payload);
    if (result.status === 201) {
      yield put(actions.loginSuccess(result.data));
    } else {
      notification.error({
        message: 'Login Failed',
      });
      yield put(actions.loginFailed());
    }
  } catch (e) {
    notification.error({
      message: 'Login Failed',
    });
    yield put(actions.loginFailed());
  }
  // if (email === 'admin@gmail.com' && password === '123') {
  //   yield put(actions.loginSuccess());
  // } else {
  //   yield put(actions.loginFailed());
  // }
}

function* loginSaga() {
  yield all([takeLatest(LOGIN, submitLogin)]);
}

export default function* root() {
  yield all([fork(loginSaga)]);
}
