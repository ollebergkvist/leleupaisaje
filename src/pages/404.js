import React from 'react';
import { Layout } from '../compenents/layout';
import { Link } from 'gatsby';

const NotFound = () => {
    return (
        <Layout>
            <h1>404: Page Not Found</h1>
            <p>
                <Link to="/projects/">Check our latest projects</Link>
            </p>
        </Layout>
    );
};

export default NotFound;
