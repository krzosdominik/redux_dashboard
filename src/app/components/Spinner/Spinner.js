import React from 'react';
import { Spinner as Spin } from 'react-bootstrap';

import { spinnerStyle } from '../../settings/constants';

const Spinner = () => {
    return (
        <div style={spinnerStyle}>
            <Spin animation="border" />
        </div>
    );
};

export default Spinner;