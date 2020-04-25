import React from 'react';
import { Link as LinkBtn } from 'react-router-dom';

const Link = ({ href, text, icon, classList, size }) => {
    return (
        <LinkBtn
            to={href}
            className={classList}
            size={size}
        >
            {icon && <i className={`${icon}`}></i>}
            {text}
        </LinkBtn>
    )
};

export default Link;
