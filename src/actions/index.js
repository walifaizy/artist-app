export const GET_SEARCH = 'GET_SEARCH';
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
export const GET_SEARCH_FAILURE = 'GET_SEARCH_FAILURE';

export const getSearch = (query) => {
    return {
        type: GET_SEARCH,
        query,
    };
};

export const getSearchSuccess = (item) => {
    return {
        type: GET_SEARCH_SUCCESS,
        item,
    };
};

export const getSearchFailure = (error) => {
    return {
        type: GET_SEARCH_FAILURE,
        error,
    };
};
