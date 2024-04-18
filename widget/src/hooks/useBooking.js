import { useContext } from 'react';
import { BookingContext } from '../Context/BookingProvider';

export const useBooking = () => {
    const { bookingData, dataHours, loadingHours, getBusyHours, updateBooking } = useContext(BookingContext);

    return {
        bookingData,
        dataHours,
        loadingHours,
        getBusyHours,
        updateBooking
    };
};
