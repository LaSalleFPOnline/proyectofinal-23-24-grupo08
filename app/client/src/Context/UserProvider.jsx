import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const defaultUserData = {
    accessToken: null,
    name: null,
    id: null,
    email: null,
    username: null,
    surname: null,
    role: null,
    isAuthenticated: null,
    state: null
};

const UserProvider = (props) => {
    const { children } = props;
    const [userData, setUserData] = useState({ ...defaultUserData });

    useEffect(() => {
        console.log('*** USER PROVIDER LOAD');
    }, []);

    const signUp = () => {};

    const signIn = () => {};

    const signOut = () => {};
    return (
        <UserContext.Provider
            value={{
                ...userData,
                signUp,
                signIn,
                signOut
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
