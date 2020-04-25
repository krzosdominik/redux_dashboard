import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Buttons/Button';
import actions from '../../users/duck/actions';

const UsernameTableHeader = ({ header }) => {
    const dispatch = useDispatch();

    const handleAscendingSort = () => dispatch(actions.sortAscending());
    const handleDescendingSort = () => dispatch(actions.sortDescending());

    return (
        <th>
            {header}
            <Button
                variant="link"
                icon="fas fa-caret-up"
                classList="p-0 ml-1 text-info"
                onClick={handleAscendingSort}
            />
            <Button
                variant="link"
                icon="fas fa-caret-down"
                classList="p-0 ml-1 text-info"
                onClick={handleDescendingSort}
            />
        </th>
    );
};

export default UsernameTableHeader;