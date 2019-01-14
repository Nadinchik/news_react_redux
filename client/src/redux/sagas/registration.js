import { call, put, takeEvery } from 'redux-saga/effects';

function* registration() {yield takeEvery('REGISTRATION_USER', registrationUser)}

function registrationUser(user) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch('/signIn', options).then();
}

export default registration();
