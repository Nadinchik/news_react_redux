import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_FAIL, AUTH_SUCCESS } from "../reducers/authReducer";

const fetchJSON = (url, options = {}) =>
  new Promise((resolve, reject) => {
    return fetch(url, options)
      .then(response => (response.status !== 200 ? reject(response) : response))
      .then(response => response.json)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

function* authorize({payload: {identifier, password}}) {
  const options = {
    body: JSON.stringify({identifier, password}),
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  };

  try {
    const {token} = yield call(fetchJSON, '/login', options);
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