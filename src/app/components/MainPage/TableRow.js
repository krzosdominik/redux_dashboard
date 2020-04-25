import React, { useState } from 'react';

import { Button, Link } from '../Buttons';
import Popup from '../Popup';

const TableRow = ({ id, name, username, email, city }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleDelete = () => setShowPopup(!showPopup);

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{city}</td>
                <td>
                    <Link
                        href={`/user/${id}`}
                        text=""
                        icon="fas fa-user-edit"
                        classList="text-info align-middle"
                        size="sm"
                    />
                </td>
                <td>
                    <Button
                        variant="link"
                        onClick={handleDelete}
                        text=""
                        icon="fas fa-trash-alt"
                        classList="text-danger align-middle"
                        size="sm"
                    />
                </td>
            </tr>
            <Popup
                show={showPopup}
                id={id}
                name={name}
                email={email}
                onClose={handleDelete}
            />
        </>
    )
};

export default TableRow;