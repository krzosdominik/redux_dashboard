import React from 'react';

import { Link } from '../Buttons';
import Table from './Table';

const Main = () => {
    return (
        <section className="rounded p-4 shadow">
            <header className="d-flex justify-content-between align-items-center">
                <h4>User list</h4>
                <Link
                    href="/user/add"
                    text="Add new"
                    icon="fas fa-plus-circle pr-2"
                    classList="btn btn-info"
                />
            </header>
            <hr />
            <Table />
        </section>
    )
};

export default Main;