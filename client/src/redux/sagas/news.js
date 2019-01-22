import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as newsActions from "../actions/news";
import API from "../sagas/services";

function* getNews({posts}) {
    console.log('posts -->', posts);
    try {
        const data = yield call(API, '/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        yield put(newsActions.newsSuccess(data.user.id));
    } catch (e) {
        yield put(newsActions.newsFail(e.statusText))
    }
};

export default function* newsSaga() {
    yield all([
        takeLatest('NEWS_REQUEST', getNews),
    ])
}