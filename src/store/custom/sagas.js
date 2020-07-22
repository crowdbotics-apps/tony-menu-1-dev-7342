import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../navigator/NavigationService';

import {
  EMAIL_AUTH_LOGIN_REQUEST,
  EMAIL_AUTH_SIGNUP_REQUEST,
  EMAIL_AUTH_PASSWORD_RECOVER_REQUEST,
  EMAIL_AUTH_LOGIN_SUCCESS,
  EMAIL_AUTH_SIGNUP_SUCCESS,
  EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
} from './constants';

import {request} from '../../utils/http';

function sendLogin({email, password}) {
  return request.post('/api/v1/login/', {
    username: email,
    password,
  });
}

function sendSignUp({email, password}) {
  return request.post('/api/v1/signup/', {
    email,
    password,
  });
}

function sendPasswordRecovery(email) {
  //api server returns 500 Internal Server Error
  return request.post('/rest-auth/password/reset/', {
    email,
  });
}

function* handleLogin(action) {
  const {
    user: {email, password},
  } = action;
  try {
    const {status, data} = yield call(sendLogin, {email, password});

    yield put({
      type: EMAIL_AUTH_LOGIN_SUCCESS,
      accessToken: data.token,
    });
    
    // Todo: navigate to home screen
    NavigationService.navigate('Home');
    
  } catch (error) {
    alert("Can't sign in with provided credentials")
  }
}

function* handleSignUp(action) {
  const {
    user: {email, password},
  } = action;
  try {
    const {status, data} = yield call(sendSignUp, {email, password});

    yield put({
      type: EMAIL_AUTH_SIGNUP_SUCCESS,
      user: data.user,
    });
    
    alert("You've been signed up successfully")
    
  } catch (error) {
    alert("Can't sign up with provided credentials")
  }
}

function* handlePasswordRecovery(action) {
  const {email} = action;

  try {
    const {status} = yield call(sendPasswordRecovery, email);

    yield put({
      type: EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS,
      email,
    });

    alert("Reset password link is sent to your email.")
    
  } catch (error) {
    alert("Can't recover password with provided email")
  }
}

export default function* customRootSaga() {
  yield all([
    takeLatest(EMAIL_AUTH_LOGIN_REQUEST, handleLogin),
    takeLatest(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp),
    takeLatest(EMAIL_AUTH_PASSWORD_RECOVER_REQUEST, handlePasswordRecovery),
  ]);
}