import React from 'react';
import { useUser } from '../../hooks/useUser';

const BookingsPage = (props) => {
    const { idRestaurant } = props;
    const { name } = useUser();
    console.log('*** BOOKINGS RESTAURANT PAGE useUser -> ', { name, idRestaurant });

    return <h1>Bookings Restaurant</h1>;
};

export default BookingsPage;
