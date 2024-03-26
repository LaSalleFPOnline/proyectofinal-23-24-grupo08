import React from 'react';
import UserProvider from './Context/UserProvider';
import { LandingPage } from './pages/landingPage/LandingPage';

export const App = () => {
    return (
        <>
            <UserProvider>
                <LandingPage />
            </UserProvider>
        </>
    );
};

export default App;
