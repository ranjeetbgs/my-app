import { combineReducers } from 'redux';
import { hasErrored, isLoading } from './activity';
import { users2} from './users';

export default combineReducers({
    hasErrored,
    isLoading,
    users2
});
