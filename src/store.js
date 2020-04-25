import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './app/users/duck';
import thunk from 'redux-thunk';

const store = createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;