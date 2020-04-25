import React from 'react';

const TableMessage = ({ message }) => {
    return (
        <tr>
            <td colSpan={7} className="text-danger">
                {message}
            </td>
        </tr>
    );
};

export default TableMessage;