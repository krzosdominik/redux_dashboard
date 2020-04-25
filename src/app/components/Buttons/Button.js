import React from 'react';
import { Button as Btn } from 'react-bootstrap';

const Button = ({ variant, text, icon = null, onClick, size, type = "button", classList }) => {
    return (
        <Btn
            variant={variant}
            onClick={onClick}
            className={classList}
            size={size}
            type={type}
        >
            {icon && <i className={`${icon}`}></i>}
            {text}
        </Btn>
    )
};

export default Button;