import { createContext, useEffect, useState } from 'react';
import { useData } from '../hooks/useData';
import { getFormatDate } from '../helpers/dateHelper';

export const BookingContext = createContext();

const defaultBookingData = {
    idRestaurant: null,
    name: null,
    phone: null,
    mail: null,
    date: null,
    time: null,
    guests: null,
    comments: null
};

const BookingProvider = (props) => {
    const { children } = props;
    const [bookingData, setBookingData] = useState({ ...defaultBookingData });
    const [dataHours, setDataHours] = useState(null);

    // TODO: Canviar al conectar amb l'API
    const { data: dataHours2, loading: loadingHours, error: errorHours, getData: getHours } = useData();

    useEffect(() => {
        setDataHours(['12:30', '13:00', '14:30']);
    }, [dataHours2]);

    const getBusyHours = (date) => {
        const formatDate = getFormatDate(date);
        console.log('**** GET BUSY HOURS', formatDate);

        // TODO:
        getHours('/v2/pokemon/ditto');
    };

    const updateBooking = (data) => {
        console.log('>>>> UPDATE BOOKING DATA ---', { ...bookingData, ...data });
        setBookingData({ ...bookingData, ...data });
    };

    return (
        <BookingContext.Provider
            value={{
                bookingData,
                loadingHours,
                dataHours,
                getBusyHours,
                updateBooking
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export default BookingProvider;
