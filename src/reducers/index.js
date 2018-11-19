import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AppReducer from './app-reducer';

export default(history) => combineReducers({
  form: formReducer,
  app: AppReducer,
});
