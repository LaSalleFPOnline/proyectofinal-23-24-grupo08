import './styles/globals.scss';
import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider from './Context/UserProvider';
import AppRouter from './routes/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>
            <AppRouter />
        </UserProvider>
    </BrowserRouter>
);
