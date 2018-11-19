import * as AppActions from './app-actions';
import * as AppTypes from '../constants/app-types';

describe('Test App Actions', () => {
  it('should create an action to move to next question', () => {
    const expectedAction = {
      type: AppTypes.NEXT_QUESTION,
    };
    expect(AppActions.nextQuestion()).toEqual(expectedAction);
  });

  it('should create an action to move to previous question', () => {
    const expectedAction = {
      type: AppTypes.PREV_QUESTION,
    };
    expect(AppActions.prevQuestion()).toEqual(expectedAction);
  })
});
