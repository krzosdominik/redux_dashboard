import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserForm from './UserForm';
import { editUser } from '../../users/duck/operations';

const EditUser = props => {
    const { id } = props.match.params;
    const users = useSelector(state => state.data.users);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(...users.filter(user => user.id === parseInt(id)));
    }, [users, id]);

    const handleSubmit = (name, email) => {
        dispatch(editUser({ ...user, name, email }));
        props.history.replace("/");
    };

    return (
        <>
            {user && (
                <UserForm
                    name={user.name}
                    email={user.email}
                    onSubmit={handleSubmit}
                />
            )}
        </>
    );
};

export default EditUser;