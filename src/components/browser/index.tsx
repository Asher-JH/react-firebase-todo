import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import Navbar from './nav-bar';

const Browser: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Navbar />
            <div>
                <Outlet />
            </div>
        </Container>
    );
};

export default Browser;
