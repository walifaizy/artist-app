import { call, put } from 'redux-saga/effects';
import { getSearchSuccess, getSearchFailure } from '../../actions';
import { requestSearch } from '../requests/search';

export function* handleSearch(action) {
    try {
        const response = yield call(requestSearch, action.query);
        const { data } = response;
        yield put(getSearchSuccess(data));
    } catch (error) {
        yield put(getSearchFailure(error));
    }
}
