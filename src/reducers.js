import { combineReducers } from 'redux';
import usersReducer from './app/users/duck';

const rootReducer = combineReducers({
    data: usersReducer
});

export default rootReducer;