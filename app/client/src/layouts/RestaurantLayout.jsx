import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/footer/Footer';

const RestaurantLayout = ({ children }) => {
    console.log('RESTAURANT LAYOUT!');
    return (
        <>
            <Navigation layout='restaurant' />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default RestaurantLayout;
