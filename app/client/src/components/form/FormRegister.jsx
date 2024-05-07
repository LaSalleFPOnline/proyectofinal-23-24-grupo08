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
import { Button } from '../button/Button';

export const FormRegister = ({ plan }) => {
    const methods = useForm();
    const { signUp, isLoading } = useUser();

    const onSubmit = methods.handleSubmit((data) => {
        if (Object.keys(data).length) signUp(data);
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete='off'>
                <div className='mb-12'>
                    <h1 className='text-3xl font-bold mb-2'>Registra tu restaurante - {plan}</h1>
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
                    <Button onClick={onSubmit} text={isLoading ? 'Resgistrando...' : 'Registrate'} />
                </div>
            </form>
        </FormProvider>
    );
};
