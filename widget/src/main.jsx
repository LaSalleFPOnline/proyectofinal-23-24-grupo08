import './styles/globals.scss';
import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DGustaWidgetApp } from './DGustaWidgetApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DGustaWidgetApp />
    </BrowserRouter>
);
