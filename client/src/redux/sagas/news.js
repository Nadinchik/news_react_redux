import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as newsActions from '../actions/news';
import API from '../sagas/services';

function* getUsersNews({ idUser }) {
  try {
    const data = yield call(API, `/news/${idUser}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(newsActions.getNewsByIdSuccess(data.posts));
  } catch (error) {
    yield put(newsActions.getNewsByIdFail(error));
  }
}

function* getAllNews() {
  try {
    const data = yield call(API, `/news`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(newsActions.getAllNewsSuccess(data.posts));
  } catch (error) {
    yield put(newsActions.getAllNewsFail(error));
  }
}

function* addNews({ data }) {
  const idUser = localStorage.getItem('idUser');
  try {
    const dataRes = yield call(API, `/profile/${idUser}`, {
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
  } catch (error) {
    yield put(newsActions.addNewsFail(error, 'Cannot add data'));
  }
}

function* deleteNews({ id }) {
  try {
    const dataRes = yield call(API, `/profile/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(newsActions.deleteNewsSuccess(dataRes.posts));
  } catch (error) {
    yield put(newsActions.deleteNewsFail(error, 'Cannot delete data'));
  }
}


export default function* newsSaga() {
  yield all([
    takeEvery('GET_ALL_NEWS_REQUEST', getAllNews),
    takeEvery('GET_NEWS_ByID_REQUEST', getUsersNews),
    takeEvery('ADD_NEWS_REQUEST', addNews),
    takeEvery('DELETE_NEWS_REQUEST', deleteNews),
  ]);
}
