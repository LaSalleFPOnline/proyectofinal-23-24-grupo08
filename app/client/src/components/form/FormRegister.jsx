import { Input } from '../Input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import {
    firstname_validation,
    lastname_validation,
    email_validation,
    password_validation,
    nameRestaurant_validation
} from '../Input/helpers';
import { useUser } from '../../hooks/useUser';
import { useState } from 'react';
import { Button } from '../button/Button';

export const FormRegister = () => {
    const methods = useForm();
    const { signUp } = useUser();

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);

        if (Object.keys(data).length) {
            console.log('DATA >>> ', data);
            signUp(data);
        }
        //   const myHeaders = new Headers();
        //   myHeaders.append("Content-Type", "application/json");

        //   const raw = JSON.stringify({
        //     username: data.username,
        //     firstName: data.name,
        //     email: data.email,
        //     password: data.password,
        //   });

        //   const requestOptions = {
        //     method: "POST",
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: "follow",
        //   };

        //   fetch("http://localhost:9000/api/user", requestOptions)
        //     .then((response) => response.text())
        //     .then((result) => console.log(result))
        //     .catch((error) => console.error(error));
        // }

        // console.log("User has been registered successfully");
        // console.log("Redirecting to login page");
        // console.log(data);
        // navigate("/login");
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete='off'>
                <div className='mb-12'>
                    <h1 className='text-3xl font-bold mb-2'>Registra tu restaurante</h1>
                    <p className='text-sm text-gray-500	font-bold'>Accede de forma ràpida a DGusta</p>
                </div>
                <div className='border-black'>
                    <h3 className='uppercase mb-3'>Datos de usuario</h3>
                    <Input {...firstname_validation} />
                    <Input {...lastname_validation} />
                    <Input {...email_validation} />
                    <Input {...password_validation} />
                    <div className='border-l border-gray-400 h-12'></div>
                    <h3 className='uppercase mb-3'>Datos del restaurante</h3>
                    <Input {...nameRestaurant_validation} />
                </div>
                <div className='mt-5'>
                    <Button onClick={onSubmit} text='Registrate' />
                </div>
            </form>
        </FormProvider>
    );
};
