import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as loginActions from '../actions/login';
import API from '../sagas/services';

function* login({ username, password }) {
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
    let message = 'User isn\'t found';
    if (e.status === 400) {
      message = 'Password is incorrect';
    }
    yield put(loginActions.loginFail(message));
  }
};

function* logOut() {
  yield put(loginActions.logOutSuccess());
  localStorage.removeItem('idUser');
  localStorage.removeItem('isLogged');
};

function* getUserById({ id }) {
  try {
    const data = yield call(API, `/profile/my/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(loginActions.getUserByIdSuccess(data.user));
  } catch (e) {
    let message = 'User isn\'t found';
    yield put(loginActions.getUserByIdFail(message));
  }
}

export default function* loginSaga() {
  yield all([
    takeEvery('LOGIN_REQUEST', login),
    takeEvery('GET_USER_BY_ID_REQUEST', getUserById),
    takeEvery('LOG_OUT', logOut),
  ]);
}
