import AppReducer from './app-reducer';
import * as AppTypes from '../constants/app-types';

import { questionnaire } from './questionnaire.json';

const INITIAL_STATE = {
  ...questionnaire,
  currentQuestionIdx: 0,
};

describe('APP REDUCER', () => {
  it('should return initial state', () => {
    expect(AppReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle NEXT_QUESTION', () => {
    expect(
      AppReducer(undefined, {
        type: AppTypes.NEXT_QUESTION
      })
    ).toEqual({
      ...INITIAL_STATE,
      currentQuestionIdx: 1
    });
  });

  it('should handle PREV_QUESTION', () => {
    expect(
      AppReducer(undefined, {
        type: AppTypes.PREV_QUESTION
      })
    ).toEqual({
      ...INITIAL_STATE,
      currentQuestionIdx: -1
    })
  })
});
