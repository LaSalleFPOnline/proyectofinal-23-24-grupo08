import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/footer/Footer';

const AdminLayout = ({ children }) => {
    return (
        <>
            <Navigation layout='admin' />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default AdminLayout;
