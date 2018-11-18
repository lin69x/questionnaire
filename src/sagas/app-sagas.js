import { call, put, fork, takeEvery } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form'
import { delay } from "redux-saga"

import { AppTypes } from '../constants';

function* disableForm() {
  try {
    yield put(startSubmit('questionnaire'));
    yield call(delay, 500);
    yield put(stopSubmit('questionnaire'));
  }
  catch(error) {
    throw new Error(error);
  }
}

function* watchSubmission () {
  yield takeEvery(AppTypes.NEXT_QUESTION, disableForm);
  yield takeEvery(AppTypes.PREV_QUESTION, disableForm);
}


export default [
  fork(watchSubmission)
];
