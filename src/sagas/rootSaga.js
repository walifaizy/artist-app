import { takeLatest } from 'redux-saga/effects';
import { GET_SEARCH } from '../actions';
import { handleSearch } from './handlers/search';

export function* watcherSaga() {
    yield takeLatest(GET_SEARCH, handleSearch);
}
