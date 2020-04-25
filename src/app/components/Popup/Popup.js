import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';

import Button from '../Buttons/Button';
import PopupTable from './PopupTable';

import { deleteUser } from '../../users/duck/operations';

const Popup = ({ show, id, name, email, onClose }) => {
    const [isVisible, setVisible] = useState(show);
    const dispatch = useDispatch();

    useEffect(() => {
        setVisible(show);
    }, [show]);

    const handleCancel = () => {
        setVisible(false);
        onClose();
    };

    const handleDelete = () => dispatch(deleteUser(id));;

    return (
        <Modal show={isVisible}>
            <Modal.Header>
                <Modal.Title>Delete this user?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PopupTable id={id} name={name} email={email} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={handleCancel} text="Cancel" />
                <Button variant="danger" onClick={handleDelete} text="Delete" />
            </Modal.Footer>
        </Modal>
    );
};

export default Popup;