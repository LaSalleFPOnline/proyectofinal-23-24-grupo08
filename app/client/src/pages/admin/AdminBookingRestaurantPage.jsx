import React from 'react';
import { useUser } from '../../hooks/useUser';

const AdminBookingRestaurantPage = (props) => {
    const { name } = useUser();
    console.log('*** AdminBookingRestaurantPage -> ', { name });

    return <h1>AdminBookingRestaurantPage</h1>;
};

export default AdminBookingRestaurantPage;
