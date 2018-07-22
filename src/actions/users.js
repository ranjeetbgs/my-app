import {isLoading,fetchDataSuccess,hasErrored} from './activity';

export function getUsers(url) {

    console.log('getuser called');
    return (dispatch) => {
        dispatch(isLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(isLoading(false));
                console.log(response);
                return response;
            })
            .then((response) => response.json())
            .then((users) => dispatch(fetchDataSuccess(users)))
            .catch(() => dispatch(hasErrored(true)));
    };
}
