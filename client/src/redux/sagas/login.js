import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as loginActions from "../actions/login";
import API from "../sagas/services";

function* login({username, password}) {
  console.log('usernameLogin, passwordLogin -->', username, password);
  try {
    const data = yield call(API, '/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'set-Cookie': ''
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log('dataLogin -->', data);
    yield put(loginActions.loginSuccess(data.user));

  } catch (e) {
    yield put(loginActions.loginFail(e.statusText))
  }
};

export default function* loginSaga() {
  yield all([
    takeLatest('LOGIN_REQUEST', login),
  ]);
}