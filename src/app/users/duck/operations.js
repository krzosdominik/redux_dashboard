import actions from './actions';
import { API_URL, GET, POST, PUT, DELETE } from '../../settings/constants';

const getData = async () => {
    const response = await fetch(API_URL, GET);
    return await response.json();
};

const postData = async (user) => {
    const body = JSON.stringify(user);
    const response = await fetch(API_URL, { ...POST, body });
    return await response.json();
}

const putData = async (user) => {
    const body = JSON.stringify(user);
    const response = await fetch(`${API_URL}/${user.id}`, { ...PUT, body });
    return await response.json();
};

const deleteData = id => {
    fetch(`${API_URL}/${id}`, DELETE);
    return id;
};

export const getAllUsers = () => {
    return async dispatch => {
        const users = await getData();
        dispatch(actions.add(users));
    };
};

export const addNewUser = data => {
    return async dispatch => {
        const user = await postData(data);
        dispatch(actions.addNewUser(user));
    };
};

export const editUser = data => {
    return async dispatch => {
        const user = await putData(data);
        dispatch(actions.updateUser(user));
    };
};

export const deleteUser = id => dispatch => dispatch(actions.deleteUser(deleteData(id)));
