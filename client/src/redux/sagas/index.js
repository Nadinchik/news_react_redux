import { fork, all } from 'redux-saga/effects';
import signUpSaga from './signUp';

export default function* rootSaga() {
  yield all([
    fork(signUpSaga),
  ])
}