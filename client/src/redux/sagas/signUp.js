import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as signUpActions from "../actions/signUp";
import API from "../sagas/services";

function* signUp({fullName, username, password}) {
  console.log('fullName, username, password -->', fullName, username, password);
  try {
    const data = yield call(API, '/signUp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: fullName,
          username: username,
          password: password,
        }),
      });
    console.log('data -->', data);

    yield put(signUpActions.signUpSuccess(data.user));
  } catch (e) {
    yield put(signUpActions.signUpFail(e))
  }
};

export default function* signUpSaga() {
  yield all([
    takeLatest('SIGN_UP_USER_REQUEST', signUp),
  ]);
}