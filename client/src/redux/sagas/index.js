import {all, fork} from 'redux-saga/effects';
import signUpSaga from './signUp';
import loginSaga from './login';
import newsSaga from './news';

export default function* rootSaga() {

    yield all([
        fork(loginSaga),
        fork(signUpSaga),
        fork(newsSaga),
    ])
}