import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import { useData } from '../hooks/useData';

export const BookingContext = createContext();

const defaultBookingData = {
    idRestaurant: null,
    username: null,
    phone: null,
    mail: null,
    date: null,
    hour: null,
    numPers: null
};

const BookingProvider = (props) => {
    const { children } = props;
    const [isValidRestaurant, setIsValidRestaurant] = useState(false);
    const [bookingData, setBookingData] = useState({ ...defaultBookingData });
    const [configRestaurant, setConfigRestaurant] = useState({});
    const {
        data: dataValidateRestaurant,
        loading: loadingValidateRestaurant,
        error: errorValidateRestaurant,
        getData: getDataValidateRestaurant
    } = useData();
    const {
        data: dataConfigRestaurant,
        loading: loadingConfigRestaurant,
        error: errorConfigRestaurant,
        getData: getDataConfigRestaurant
    } = useData();

    useLayoutEffect(() => {
        const root = document.querySelector('#dgusta-widget-booking');
        const idRestaurant = root.dataset.restaurant;
        console.log('restaurant ---> ', idRestaurant);

        // TODO: Canviar per la crida correcta
        getDataValidateRestaurant('/v2/pokemon/ditto');

        // TODO: Activar similar
        // getDataValidateRestaurant(`/validateRestaurant/${idRestaurant}`);
    }, []);

    useEffect(() => {
        if (dataValidateRestaurant && dataValidateRestaurant.name === 'ditto') {
            console.log('*** VALIDATE RESTAURANT');
            // MOCK ID RESTAURANT
            const idRestaurant = 123;
            setBookingData({ ...bookingData, idRestaurant });
            setIsValidRestaurant(true);
        }
    }, [dataValidateRestaurant]);

    useEffect(() => {
        if (isValidRestaurant) {
            console.log('*** GET CONFIG RESTAURANT');
            getDataConfigRestaurant('/v2/pokemon/ditto');
        }
    }, [isValidRestaurant]);

    const setBooking = (data) => {
        console.log('set booking data --->> ', data);
    };

    return (
        <BookingContext.Provider
            value={{
                bookingData,
                configRestaurant: {
                    data: dataConfigRestaurant,
                    loading: loadingConfigRestaurant,
                    error: errorConfigRestaurant
                },
                setBooking
            }}
        >
            {loadingValidateRestaurant ? (
                <p>Cargando...</p>
            ) : isValidRestaurant && !errorValidateRestaurant ? (
                children
            ) : (
                <p>No tienes permisos para utilizar el widget</p>
            )}
        </BookingContext.Provider>
    );
};

export default BookingProvider;
