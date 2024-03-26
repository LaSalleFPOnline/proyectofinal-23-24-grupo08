import { createContext, useEffect, useState } from 'react';
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
    state: null
};

const UserProvider = (props) => {
    const { children } = props;
    const [userData, setUserData] = useState({ ...defaultUserData });
    const navigate = useNavigate();

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            setUserData({ ...user });
        }
    };

    const isRestaurant = () => {
        return userData?.role === 2;
    };

    const isAdmin = () => {
        return userData?.role === 1;
    };

    const signUp = () => {};

    const signIn = (params) => {
        const { email, password } = params;

        // TODO login

        const userDataMock = {
            accessToken: 'asd9239fjhjasid99ehskafbsjdfkas',
            name: 'nameAuthenticated',
            id: 12,
            email,
            username: 'Username usuari',
            surname: 'Balcells',
            role: 1,
            isAuthenticated: true,
            state: 1
        };
        console.log('** sign in');
        setUserData(userDataMock);
        navigate('/', {
            replace: true
        });
    };

    const signOut = () => {
        setUserData({ ...defaultUserData });
    };

    useEffect(() => {
        console.log('*** USER PROVIDER LOAD');
        const { isAuthenticated } = userData;
        if (isAuthenticated) {
            localStorage.setItem('user', JSON.stringify(userData));
        } else {
            localStorage.removeItem('user');
        }
    }, [userData]);

    useEffect(() => {
        init();
    }, []);

    return (
        <UserContext.Provider
            value={{
                ...userData,
                signUp,
                signIn,
                signOut,

                isRestaurant,
                isAdmin
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
