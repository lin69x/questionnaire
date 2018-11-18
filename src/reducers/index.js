import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createResponsiveStateReducer } from 'redux-responsive';
import AppReducer from './app-reducer';

const defaultBreakpoints = {
  extraSmall: 480,
  small: 768,
  medium: 992,
  large: 1200,
};

export default(history) => combineReducers({
  browser: createResponsiveStateReducer(defaultBreakpoints),
  form: formReducer,
  app: AppReducer,
});
