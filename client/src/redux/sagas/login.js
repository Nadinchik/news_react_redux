import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as loginActions from '../actions/login';
import API from '../sagas/services';

function* login({ username, password }) {
  console.log('usernameLogin, passwordLogin -->', username, password);
  try {
    const data = yield call(API, '/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    yield put(loginActions.loginSuccess(data.user));
    localStorage.setItem('idUser', data.user._id);
    localStorage.setItem('isLogged', 'true');
  } catch (e) {
    yield put(loginActions.loginFail(e.statusText));
  }
};

function* logOut() {
  yield put(loginActions.logOut());
  localStorage.removeItem('idUser');
  localStorage.removeItem('isLogged');
};

export default function* loginSaga() {
  yield all([
    takeEvery('LOGIN_REQUEST', login),
    takeEvery('LOG_OUT', logOut)
  ]);
}