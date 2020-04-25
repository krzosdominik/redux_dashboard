import React from 'react';
import { Table } from 'react-bootstrap';

const PopupTable = ({ id, name, email }) => {
    return (
        <Table size="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default PopupTable;