import { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';

export const useUser = () => {
    const {
        accessToken,
        userId,
        restaurantId,
        firstName,
        lastName,
        restaurantName,
        email,
        slug,
        validate,
        role,
        isAuthenticated,
        isRestaurant,
        isAdmin,

        isLoading,
        errorLogin,
        errorRegister,
        signUp,
        signIn,
        signOut
    } = useContext(UserContext);

    return {
        accessToken,
        userId,
        restaurantId,
        firstName,
        lastName,
        restaurantName,
        email,
        slug,
        validate,
        role,
        isAuthenticated,
        isRestaurant,
        isAdmin,

        isLoading,
        errorLogin,
        errorRegister,
        signUp,
        signIn,
        signOut
    };
};
