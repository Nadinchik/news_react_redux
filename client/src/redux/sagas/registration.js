import { call, put, takeEvery } from 'redux-saga/effects';
import {REGISTRATION_USER_FAIL} from "../actions/signIn"

function* registration() {yield takeEvery('REGISTRATION_USER', registrationUser)}

function* registrationUser(user) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };
  return fetch('/signIn', options).then(registration),
  yield put({type: REGISTRATION_USER_FAIL, payload: message});
}

export default registration();
