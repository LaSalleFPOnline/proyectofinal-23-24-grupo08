import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/footer/Footer';

const LandingLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            <p>Landing layout</p>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default LandingLayout;
