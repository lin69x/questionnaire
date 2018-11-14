import { AppTypes } from '../constants';

import { questionnaire } from './questionnaire.json';

const INITIAL_STATE = {
  ...questionnaire
};

export default (state = INITIAL_STATE, { type: actionType, payload = null }) => {
  switch (actionType) {
    default:
      return state;
  }
};
