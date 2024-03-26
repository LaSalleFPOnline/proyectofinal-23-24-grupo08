import { createContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    isRestaurant: null,
    isAdmin: null,
    state: null
};

const getInitUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || defaultUserData;
};

const UserProvider = (props) => {
    const { children } = props;
    const [userData, setUserData] = useState({ ...getInitUser() });
    const navigate = useNavigate();

    const signUp = () => {};

    const signIn = (params) => {
        const { email, password } = params;

        // TODO login por AccessToken

        // MOCKS
        let userDataMock = {
            accessToken: 'asd9239fjhjasid99ehskafbsjdfkas',
            name: 'nameAuthenticated',
            id: 12,
            email,
            username: 'can-balcells',
            surname: 'Balcells',
            role: 2,
            isAuthenticated: true,
            isRestaurant: true,
            isAdmin: false,
            state: 1
        };

        if (email === 'admin@dgusta.com') {
            userDataMock = {
                accessToken: 'asd9239fjhjasid99ehskafbsjdfkas',
                name: 'nameAuthenticated',
                id: 1,
                email,
                username: 'admin',
                surname: 'Admin',
                role: 1,
                isAuthenticated: true,
                isRestaurant: false,
                isAdmin: true,
                state: 1
            };
        }
        setUserData(userDataMock);
        navigate('/', {
            replace: true
        });
    };

    const signOut = () => {
        setUserData({ ...defaultUserData });
        localStorage.removeItem('user');
    };

    useEffect(() => {
        console.log('*** USER PROVIDER user data --> ', userData);
        const { isAuthenticated } = userData;
        if (isAuthenticated) localStorage.setItem('user', JSON.stringify(userData));
    }, [userData]);

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
