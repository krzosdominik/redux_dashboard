import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import Button from '../Buttons/Button';
import Link from '../Buttons/Link';

const UserForm = ({ name = "", email = "", onSubmit }) => {
    const [userName, setUserName] = useState(name);
    const [userEmail, setUserEmail] = useState(email);
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        
        if (event.currentTarget.checkValidity() === true) {
            onSubmit(userName, userEmail);
        };
    };

    const handleNameChange = event => setUserName(event.target.value);
    const handleEmailChange = event => setUserEmail(event.target.value);

    return (
        <section className="rounded p-4 shadow">
            <h4>Form</h4>
            <hr />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter name"
                            value={userName}
                            onChange={handleNameChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name!
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Email</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            required
                            type="Email"
                            placeholder="Email"
                            value={userEmail}
                            onChange={handleEmailChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email!
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Link
                        href="/"
                        classList="btn btn-outline-danger mr-3"
                        text="Cancel"
                    />
                    <Button
                        variant="success"
                        type="submit"
                        text="Submit"
                    />
                </div>
            </Form>
        </section>
    )
}

export default UserForm;