import React from 'react';
import { useDispatch } from 'react-redux';

import UserForm from './UserForm';
import { addNewUser } from '../../users/duck/operations';

const AddUser = props => {
    const dispatch = useDispatch();

    const handleSubmit = (name, email) => {
        dispatch(addNewUser({ name, email }));
        props.history.replace("/");
    };

    return <UserForm onSubmit={handleSubmit} />;

};

export default AddUser;