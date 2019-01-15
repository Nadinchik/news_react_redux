import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_FAIL, AUTH_SUCCESS } from "../reducers/authReducer";
import API from "./services";


function* authorize({payload: {identifier, password}}) {
  const options = {
    body: JSON.stringify({identifier, password}),
    method: 'POST',
    headers: {'Content-Type': 'application/json'},

  };

  try {
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