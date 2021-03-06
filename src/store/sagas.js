import { takeLatest, put, call } from 'redux-saga/effects';

function apiGet(text, length) {
    console.log("API GET CALLED");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Fazer café' },
        { id: 2, text: 'Fazer café 2' },
        { id: 3, text: 'Fazer café 3' },
        { id: 4, text: 'Fazer café 4' },
      ]);
    }, 2000);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiGet);

    yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

export default function* root() {
    console.log("ROOT CALLED");
  yield [
    takeLatest('REQUEST_TODO_LIST', getTodoList),
  ];
}
