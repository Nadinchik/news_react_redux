import { fork, all } from 'redux-saga/effects';
import signUp from './registration';

export default function* mySaga() {
  yield all([
    fork(signUp),
  ])
}