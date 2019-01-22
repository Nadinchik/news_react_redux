import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as loginActions from "../actions/login";
import API from "../sagas/services";

function* login({username, password}) {
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
        console.log('dataLogin -->', data.user);
        yield put(loginActions.loginSuccess(data.user));
        localStorage.setItem('idUser', data.user._id);
    } catch (e) {
        yield put(loginActions.loginFail(e.statusText))
    }
};

export default function* loginSaga() {
    yield all([
        takeLatest('LOGIN_REQUEST', login),
    ]);
}