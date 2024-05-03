import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export default function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { signIn, errorLogin } = useUser();

    const onButtonClick = (e) => {
        e.preventDefault();

        setEmailError('');
        setPasswordError('');

        if ('' === email) {
            setEmailError('Introduce tu email');
            return;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Introduce un email válido');
            return;
        }

        if ('' === password) {
            setPasswordError('Introduce un password');
            return;
        }

        if (password.length < 7) {
            setPasswordError('El password ha de tener 8 o más caracteres');
            return;
        }

        signIn({ email, password });
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <h1 className='text-3xl font-bold mb-4'>Login</h1>
                <div className='w-64'>
                    <input
                        value={email}
                        placeholder='Email'
                        onChange={(ev) => setEmail(ev.target.value)}
                        className='block w-full px-4 py-2 mb-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    />
                    <label className='text-red-600 text-sm mt-2'>{emailError}</label>
                    <input
                        value={password}
                        placeholder='Password'
                        onChange={(ev) => setPassword(ev.target.value)}
                        type='password'
                        className='block w-full px-4 py-2 mb-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    />
                    <label className='text-red-600 text-sm mt-2'>{passwordError}</label>
                    {errorLogin && <div className='text-red-600 text-sm mt-2'>Email o password incorrecto</div>}
                    <button
                        className='flex justify-center w-full py-2 mt-4 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'
                        onClick={onButtonClick}
                    >
                        Acceder
                    </button>
                </div>
            </div>
        </>
    );
}
