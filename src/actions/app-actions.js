import { AppTypes } from '../constants';

export const nextQuestion = (payload) => ({
  type: AppTypes.NEXT_QUESTION,
  payload
});

export const prevQuestion = (payload) => ({
  type: AppTypes.PREV_QUESTION,
  payload
});
