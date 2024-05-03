import { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';

export const useUser = () => {
    const {
        accessToken,
        userId,
        restaurantId,
        email,
        slug,
        validate,
        role,
        isAuthenticated,
        isRestaurant,
        isAdmin,

        errorLogin,
        signUp,
        signIn,
        signOut
    } = useContext(UserContext);

    return {
        accessToken,
        userId,
        restaurantId,
        email,
        slug,
        validate,
        role,
        isAuthenticated,
        isRestaurant,
        isAdmin,

        errorLogin,
        signUp,
        signIn,
        signOut
    };
};
