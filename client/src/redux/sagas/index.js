import  {call, put, takeLatest } from 'redux-saga/effects';
import {AUTH_REQUEST, AUTH_FAIL, AUTH_SUCCESS} from "../reducers/authReducer";

function* authorize({payload: {identifier, password}}) {
    const options = {
        body: JSON.stringify({identifier, password}),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    };
}

function* mySaga() {
    yield takeLatest(AUTH_REQUEST, authorize);
}

export default mySaga;