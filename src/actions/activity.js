export function hasErrored(bool) {
    return {
        type: 'HAS_ERRORED',
        hasErrored: bool
    };
}

export function isLoading(bool) {
    return {
        type: 'IS_LOADING',
        isLoading: bool
    };
}

export function fetchDataSuccess(data) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        data
    };
}
