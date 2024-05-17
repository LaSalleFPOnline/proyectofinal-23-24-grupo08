import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import { useData } from '../hooks/useData';
import { getTimeToString } from '../helpers/dateHelper';

export const RestaurantContext = createContext();

const RestaurantProvider = (props) => {
    const { children } = props;
    const [dataRestaurant, setDataRestaurant] = useState({});
    const [isValidRestaurant, setIsValidRestaurant] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { data, loading, error, getData } = useData();

    useLayoutEffect(() => {
        setIsLoading(true);
        const root = document.querySelector('#dgusta-widget-booking');
        const widgetCode = root.dataset.restaurant;
        getData(`/restaurant/widgetValidation?widgetCode=${widgetCode}`);
    }, []);

    useEffect(() => {
        if (data?.status === 'OK' && data?.data) {
            const {
                capacity,
                closeTimeDinner,
                closeTimeLaunch,
                daysClosed,
                id,
                intervalHourBooking,
                name,
                openTimeDinner,
                openTimeLaunch,
                slug,
                userId
            } = data.data;

            setDataRestaurant({
                ...data.data,
                calendar: {
                    busyDays: ['2024-05-26'],
                    daysClose: daysClosed ? [daysClosed] : [],
                    capacity: capacity,
                    openHours: {
                        intervalHourBooking: intervalHourBooking,
                        launch: {
                            start: getTimeToString(openTimeLaunch),
                            end: getTimeToString(closeTimeLaunch)
                        },
                        dinner: {
                            start: getTimeToString(openTimeDinner),
                            end: getTimeToString(closeTimeDinner)
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
        } else {
            setIsValidRestaurant(false);
        }
        setIsLoading(false);
    }, [data]);

    return (
        <RestaurantContext.Provider
            value={{
                ...dataRestaurant
            }}
        >
            {isLoading ? (
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
