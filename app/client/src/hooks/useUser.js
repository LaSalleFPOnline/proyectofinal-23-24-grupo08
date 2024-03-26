import { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';

export const useUser = () => {
    const { accessToken, name, id, email, username, surname, role, isAuthenticated, state, signUp, signIn, signOut } =
        useContext(UserContext);

    return {
        accessToken,
        name,
        id,
        email,
        username,
        surname,
        role,
        isAuthenticated,
        state,
        signUp,
        signIn,
        signOut
    };
};
