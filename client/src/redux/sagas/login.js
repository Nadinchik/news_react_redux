import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_FAIL, AUTH_SUCCESS } from "../reducers/authReducer";
import API from "./services";
import * as signUpActions from "../actions/signUp";


function* authorize( {identifier, password}) {
  console.log('username, password -->', username, password);
  try {
    const options = {
    body: JSON.stringify({username, password}),
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  };
    const {token} = yield call(API, '/login', options);
    yield put({type: 'AUTH_SUCCESS', payload: token});
    localStorage.setItem('token', token);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal server error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }
    yield put({type: 'AUTH_FAIL', payload: message});
    localStorage.removeItem('token');
  }
}

function* mySaga() {
  yield all([
    takeLatest('AUTH_REQUEST', authorize),
  ]);
}

export default mySaga;

function* authorize({ username, password}) {
  console.log('username, password -->', username, password);
  try {
    const data = yield call(API, '/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log('data -->', data);

    yield put(signUpActions.signUpSuccess(data.user));
    localStorage.setItem('isLogged', true);
  } catch (e) {
    yield put(signUpActions.signUpFail(e.statusText))
  }

  // logout(callback){
  //   localStorage.removeItem('isLogged');
  // }
};

export default function* loginSaga() {
  yield all([
    takeLatest('AUTH_REQUEST', authorize),
  ]);
}