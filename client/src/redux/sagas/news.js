import {call, put, all, takeEvery} from 'redux-saga/effects';
import * as newsActions from "../actions/news";
import API from "../sagas/services";

function* getNews({id}) {
    try {
        const data = yield call(API, `/news/?id=${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        yield put(newsActions.newsSuccess(data));
    } catch(error){
        yield put(newsActions.newsFail(error))
    }
};

function* postNews({data}) {
    console.log('dataPost -->', data);
    try{
        const data = yield call(API, '/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: data
            }),
        });
        yield put(newsActions.addNewSuccess(data))
    }catch{
        yield put(newsActions.addNewFail)
    }

}

export default function* newsSaga() {
    yield all([
        takeEvery('NEWS_REQUEST', getNews),
        takeEvery('ADD_NEWS_REQUEST', postNews),
    ])
}