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

    useEffect(() => {
        console.log('*** USER PROVIDER LOAD');
    }, []);

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
