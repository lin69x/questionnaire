import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { AppActions } from '../actions';
import { disableForm } from './app-sagas';
import { startSubmit, stopSubmit } from 'redux-form';

describe('APP SAGAS', () => {
  const generator = cloneableGenerator(disableForm)(AppActions);

  it('should call startSubmit', () => {
    expect(generator.next().value).toEqual(put(startSubmit('questionnaire')));
  });

  it('should wait for 500 ms', () => {
    expect(generator.next().value).toEqual(call(delay, 500));
  });

  it('should call stopSubmit', () => {
    expect(generator.next().value).toEqual(put(stopSubmit('questionnaire')));
  });
});
