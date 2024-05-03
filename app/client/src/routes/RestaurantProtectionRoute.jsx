import { Navigate, useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export const RestaurantProtectionRoute = ({ children }) => {
    const { isRestaurant, slug } = useUser();
    const { slugRestaurant } = useParams();
    const isOwner = slug === slugRestaurant;
    return isRestaurant ? isOwner ? children : <Navigate to={{ pathname: `/${slug}` }} /> : <Navigate to='/login' />;
};

export default RestaurantProtectionRoute;
