import { useContext } from 'react';
import { BookingContext } from '../Context/BookingProvider';

export const useBooking = () => {
    const { idRestaurant, username, phone, mail, date, hour, numPers, configRestaurant, setBooking } = useContext(BookingContext);

    return {
        idRestaurant,
        username,
        phone,
        mail,
        date,
        hour,
        numPers,
        configRestaurant,
        setBooking
    };
};
