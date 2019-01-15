import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';


function* signUpUser(action) {
  const options = {
    url: '/auth/signUp',
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: action.data.user,
  };

  try {
    const response = yield call(axios, options);
    console.log('response -->', response);
    yield put({ type: 'success', data: response})

  } catch (e) {
    yield put({ type: 'error', data: e.message})
  }
}

function* signUp() {
  yield takeEvery('REGISTRATION_USER_REQUEST', signUpUser)
}

export default signUp;
