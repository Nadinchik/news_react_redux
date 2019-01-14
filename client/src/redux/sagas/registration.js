import { call, put, takeEvery } from 'redux-saga/effects';

function* registration() {yield takeEvery('REGISTRATION_USER', registrationUser)}

function* registrationUser(action) {
  try {
    console.log('action -->', action);

    const response = fetch(

    );

    // console.log(response);

    // yield put({ type: 'REGISTRATION_USER_SUCCEEDED', payload: response.data });

    // Тут запрос на сервер
  }catch{

  }
}

export default registration();
