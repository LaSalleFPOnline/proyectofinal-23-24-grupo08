import './styles/globals.scss';
import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { LoginPage } from './pages/loginPage/LoginPage';
import UserProvider from './Context/UserProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </UserProvider>
    </BrowserRouter>
);
