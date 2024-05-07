import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import { useData } from '../hooks/useData';

export const RestaurantContext = createContext();

const RestaurantProvider = (props) => {
    const { children } = props;
    const [dataRestaurant, setDataRestaurant] = useState({});
    const [isValidRestaurant, setIsValidRestaurant] = useState(false);

    const { data, loading, error, getData } = useData();

    useLayoutEffect(() => {
        const root = document.querySelector('#dgusta-widget-booking');
        const widgetCode = root.dataset.restaurant;
        console.log(' widgetCode restaurant ---> ', widgetCode);
        getData(`/restaurant/widgetValidation?widgetCode=${widgetCode}`);
    }, []);

    useEffect(() => {
        if (data?.status === 'OK') {
            console.log('*** VALIDATE RESTAURANT >> ', data);
            // TODO: Treure mock configuració
            setDataRestaurant({
                ...data.data,
                calendar: {
                    busyDays: ['2024-04-26'],
                    daysClose: [1],
                    capacity: 40,
                    openHours: {
                        intervalHourBooking: 15,
                        launch: {
                            start: '12',
                            end: '15'
                        },
                        dinner: {
                            start: '18',
                            end: '23'
                        }
                    }
                },
                style: {
                    colors: ['#473150', '#6a3f61', '#a25b81', '#f1829f', '#f8b4b9'],
                    formType: 'default',
                    font: 'Roboto'
                }
            });
            setIsValidRestaurant(true);
        }
    }, [data]);

    return (
        <RestaurantContext.Provider
            value={{
                ...dataRestaurant
            }}
        >
            {loading ? (
                <p>Cargando...</p>
            ) : isValidRestaurant && !error ? (
                children
            ) : (
                <p>No tienes permisos para utilizar el widget</p>
            )}
        </RestaurantContext.Provider>
    );
};

export default RestaurantProvider;
