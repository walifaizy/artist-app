import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/search';
import { watcherSaga } from './sagas/rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const allReducer = combineReducers({ search: reducers });
const store = createStore(allReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(watcherSaga);

export default store;
