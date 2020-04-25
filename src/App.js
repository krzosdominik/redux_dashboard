import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import Main from './app/components/MainPage';
import { AddUser, EditUser} from './app/components/UserManagement';
import Spinner from './app/components/Spinner';
import { getAllUsers } from './app/users/duck/operations';

const App = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.data.users);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    useEffect(() => {
        if (users.length) {
            setIsLoading(false)
        }
    }, [users]);

    return (
        <Container>
            <header>
                <h1>Dashboard</h1>
            </header>
            {isLoading && <Spinner />}
            {!isLoading && (
                <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/user/add" component={AddUser} />
                    <Route path="/user/:id" component={EditUser} />
                </Switch>
            </Router>
            )}
        </Container>
    );
}

export default App;
