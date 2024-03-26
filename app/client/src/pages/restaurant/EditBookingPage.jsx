import React from 'react';
import { useUser } from '../../hooks/useUser';

const EditBookingPage = (props) => {
    const { idRestaurant, idBooking } = props;
    const { name } = useUser();
    console.log('*** DASHBOAR RESTAURANT PAGE useUser -> ', { name, idRestaurant, idBooking });

    return <h1>EditBookingPage</h1>;
};

export default EditBookingPage;
