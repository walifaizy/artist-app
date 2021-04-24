import counterReducer from './search';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
});

export default allReducers;
