import types from './types';


const INITIAL_STATE = {
    users: []
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        case types.ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            };
        case types.UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.user.id) {
                        return action.user;
                    }
                    return user;
                })
            };
        case types.DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        case types.ASCENDING_SORT:
            return {
                ...state,
                users: [...state.users].sort(({ username: a }, { username: b }) => a.localeCompare(b))
            };
        case types.DESCENDING_SORT:
            return {
                ...state,
                users: [...state.users].sort(({ username: a }, { username: b }) => b.localeCompare(a))
            };
        default:
            return state;
    }
}

export default usersReducer;