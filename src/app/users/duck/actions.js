import types from './types';

const add = users => ({
    type: types.ADD_USERS,
    users
});

const addNewUser = user => ({
    type: types.ADD_NEW_USER,
    user
})

const updateUser = user => ({
    type: types.UPDATE_USER,
    user
});

const deleteUser = id => ({
    type: types.DELETE_USER,
    id
});

const sortAscending = () => ({
    type: types.ASCENDING_SORT
});

const sortDescending = () => ({
    type: types.DESCENDING_SORT
});

export default {
    add,
    addNewUser,
    updateUser,
    deleteUser,
    sortAscending,
    sortDescending 
};