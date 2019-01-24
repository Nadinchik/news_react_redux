import {call, put, all, takeEvery} from 'redux-saga/effects';
import * as newsActions from '../actions/news';
import API from '../sagas/services';

function* getUsersNews({id}) {
  try {
    const data = yield call(API, `/news/?id=${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(newsActions.getNewsByIdSuccess(data));
  } catch (error) {
    yield put(newsActions.getNewsByIdFail(error));
  }
}

function* getAllNews() {
  try {
    const data = yield call(API, `/news/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(newsActions.newsSuccess(data));
  }catch (error){
    yield put(newsActions.newsFail(error));
  }
}

function* addNews({data}) {
  const idUser = localStorage.getItem('idUser');
  try {
    const dataRes = yield call(API, `/news/${idUser}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: JSON.stringify(data),
      }),
    });
    yield put(newsActions.addNewsSuccess(dataRes.posts));
  } catch(error) {
    yield put(newsActions.addNewsFail(error, 'Cannot add data'));
  }
}

export default function* newsSaga() {
  yield all([
    takeEvery('NEWS_REQUEST', getAllNews),
    takeEvery('GET_NEWS_ByID_REQUEST', getUsersNews),
    takeEvery('ADD_NEWS_REQUEST', addNews),
  ]);
}