import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import rootSaga from '../sagas';
import createRootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const middlewares = [sagaMiddleware];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(responsiveStoreEnhancer, applyMiddleware(...middlewares));

const store = createStore(createRootReducer(), initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
