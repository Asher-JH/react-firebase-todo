import React from 'react';
import { Outlet } from 'react-router-dom';

const Browser: React.FC = () => {
    return (
        <div>
            Navbar <Outlet />
        </div>
    );
};

export default Browser;
