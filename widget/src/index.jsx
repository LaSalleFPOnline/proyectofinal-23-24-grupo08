import './styles/globals.scss';
import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import BookingProvider from './Context/BookingProvider';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('dgusta-widget-booking')).render(
    <BrowserRouter>
        <BookingProvider>
            <App />
        </BookingProvider>
    </BrowserRouter>
);
