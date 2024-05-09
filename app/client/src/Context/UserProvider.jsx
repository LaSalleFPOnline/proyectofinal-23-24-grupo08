import { createContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../hooks/useData';

export const UserContext = createContext();

const defaultUserData = {
    accessToken: null,
    userId: null,
    restaurantId: null,
    email: null,
    slug: null,
    validate: null,
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
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorRegister, setErrorRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { data: dataLogin, isLoading: isLoadingLogin, hasError, postData: postLogin } = useData();
    const { data: dataRegister, isLoading: isLoadingRegister, hasError: hasErrorRegister, postData: postRegister } = useData();

    const navigate = useNavigate();

    const signUp = (params) => {
        console.log('sign up >> ', params);
        postRegister('/register', params);
    };

    const signIn = (params) => {
        const { email, password } = params;
        postLogin('/login', { email, password });
    };

    const signOut = () => {
        setUserData({ ...defaultUserData });
        localStorage.removeItem('user');
    };

    const setUserDataAuthenticated = (data) => {
        setUserData({
            accessToken: data.token,
            isAuthenticated: true,
            ...data.data
        });
    };

    useEffect(() => {
        setIsLoading(isLoadingLogin || isLoadingRegister);
    }, [isLoadingLogin, isLoadingRegister]);

    useEffect(() => {
        if (dataLogin) {
            console.log('data login >>> ', { dataLogin });
            if (dataLogin?.status === 'OK') {
                setErrorLogin(false);
                setUserDataAuthenticated(dataLogin);

                const { isRestaurant, slug } = dataLogin.data;

                if (isRestaurant) {
                    navigate(`/${slug}`, {
                        replace: true
                    });
                } else {
                    navigate(`/admin`, {
                        replace: true
                    });
                }
            } else {
                signOut();
                setErrorLogin(dataLogin.message);
                console.log('ERROR LOGIN >> ', dataLogin.message);
            }
        }
    }, [dataLogin]);

    useEffect(() => {
        if (dataRegister) {
            console.log('data register >>> ', dataRegister);
            if (dataRegister?.status === 'OK') {
                setUserDataAuthenticated(dataRegister);
                const { isRestaurant, slug } = dataRegister.data;

                if (isRestaurant) {
                    navigate(`/${slug}/configuracion/restaurante`, {
                        replace: true
                    });
                } else {
                    navigate(`/admin`, {
                        replace: true
                    });
                }
            } else {
                setErrorRegister(dataRegister.error);
                console.log('ERROR REGISTER');
            }
        }
    }, [dataRegister]);

    useEffect(() => {
        const { isAuthenticated } = userData;
        if (isAuthenticated) {
            localStorage.setItem('user', JSON.stringify(userData));
        }
    }, [userData]);

    return (
        <UserContext.Provider
            value={{
                ...userData,
                isLoading,
                errorLogin,
                errorRegister,
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
