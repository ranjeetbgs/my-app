export function users2(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.data;

        default:
            return state;
    }
}
