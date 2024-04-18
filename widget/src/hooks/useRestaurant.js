import { useContext } from 'react';
import { RestaurantContext } from '../Context/RestaurantProvider';

export const useRestaurant = () => {
    const { id, name, calendar, style } = useContext(RestaurantContext);

    return {
        restaurantId: id,
        restaurantName: name,
        restaurantCalendar: calendar,
        restaurantStyle: style
    };
};
