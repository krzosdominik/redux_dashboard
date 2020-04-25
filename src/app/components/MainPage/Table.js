import React from 'react';
import { useSelector } from 'react-redux';
import { Table as Tab } from 'react-bootstrap';

import TableRow from './TableRow';
import UsernameTableHeader from './UsernameTableHeader';
import TableMessage from './TableMessage';
import { tableHeaders } from '../../settings/constants';

const Table = () => {
    const users = useSelector(state => state.data.users);

    return (
        <Tab striped responsive size="sm" className="text-center">
            <thead>
                <tr>
                    {tableHeaders.map(header => {
                        return header.toLowerCase() === "username"
                            ? <UsernameTableHeader key={header} header={header} />
                            : <th key={header}>{header}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {users && users.map(({ id, name, username, email, address }) => (
                    <TableRow
                        key={id}
                        id={id}
                        name={name}
                        username={username ? username : ""}
                        email={email}
                        city={address ? address.city : ""}
                    />
                ))}
                {!users.length && <TableMessage message="No data found" />}
            </tbody>
        </Tab>
    )
};

export default Table;