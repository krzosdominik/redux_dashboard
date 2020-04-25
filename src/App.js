import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import Main from './app/components/MainPage';
import { AddUser, EditUser} from './app/components/UserManagement';
import { getAllUsers } from './app/users/duck/operations';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    });

    return (
        <Container>
            <header>
                <h1>Dashboard</h1>
            </header>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/user/add" component={AddUser} />
                    <Route path="/user/:id" component={EditUser} />
                </Switch>
            </Router>
        </Container>
    );
}

export default App;