import { AppTypes } from '../constants';

import { questionnaire } from './questionnaire.json';

const INITIAL_STATE = {
  ...questionnaire,
  currentQuestionIdx: 0,
  slideDir: 'left'
};

export default (state = INITIAL_STATE, { type: actionType, payload = null }) => {
  switch (actionType) {
    case AppTypes.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIdx: state.currentQuestionIdx + 1,
        slideDir: 'left'
      };
    case AppTypes.PREV_QUESTION:
      return {
        ...state,
        currentQuestionIdx: state.currentQuestionIdx - 1,
        slideDir: 'right'
      };
    default:
      return state;
  }
};
