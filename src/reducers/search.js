// Init State
let INITIAL_STATE = {
    item: null,
    isLoading: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_SEARCH':
            return { ...state, isLoading: true };
        case 'GET_SEARCH_SUCCESS':
            const { item } = action;
            return { ...state, isLoading: false, item };
        case 'GET_SEARCH_FAILURE':
            return { ...state, isLoading: false };
        default:
            return state;
    }
};

export default searchReducer;
