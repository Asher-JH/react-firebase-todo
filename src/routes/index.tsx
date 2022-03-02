import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Browser from '@components/browser';
import SignIn from '@pages/auth/sign-in';
import SignUp from '@pages/auth/sign-up';
import Todos from '@pages/todos';
import NotTodos from '@pages/todos/not-todos';
import Profile from '@pages/user';
import Settings from '@pages/settings';
import Dashboard from '@pages/dashboard';
import NotFound from '@components/not-found';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Browser />}>
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="todos" element={<Todos />} />
                <Route path="not-todos" element={<NotTodos />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default Router;
