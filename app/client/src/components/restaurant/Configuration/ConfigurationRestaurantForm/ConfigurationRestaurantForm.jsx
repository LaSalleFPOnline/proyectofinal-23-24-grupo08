import React from 'react';
import './configurationPersonalDataStyles.module.scss';
import { useUser } from '../../../../hooks/useUser';
import { useForm } from '../../../../hooks/useForm';
import { formValidations } from './formValidations';
import {
    optionsCloseDinner,
    optionsCloseLaunch,
    optionsDayClosed,
    optionsInterval,
    optionsOpenDinner,
    optionsOpenLaunch
} from './optionsSelect';
import FormInput from '../../../FormInputs/FormInput';

const ConfigurationRestaurantForm = () => {
    const { restaurantId, config } = useUser();

    const formData = {
        daysClose: config?.daysClosed,
        capacity: config?.capacity,
        intervalHourBooking: config?.intervalHourBooking,
        openTimeLaunch: config?.launch.start,
        closeTimeLaunch: config?.launch.end,
        openTimeDinner: config?.dinner.start,
        closeTimeDinner: config?.dinner.end
    };
    const {
        formState,
        onInputChange,
        onSubmit,
        formSubmitted,
        checkedValidateFields,
        onResetForm,

        daysClose,
        capacity,
        intervalHourBooking,
        openTimeLaunch,
        closeTimeLaunch,
        openTimeDinner,
        closeTimeDinner,

        isFormValid,
        daysCloseValid,
        capacityValid,
        intervalHourBookingValid,
        openTimeLaunchValid,
        closeTimeLaunchValid,
        openTimeDinnerValid,
        closeTimeDinnerValid,

        responseForm,
        isLoadingForm,
        hasSendingError
    } = useForm(formData, formValidations, `/restaurant/${restaurantId}`, 'PUT');

    return (
        <div className='personalDataMainContainer'>
            <h2>CONFIGURACIÓN RESTAURANTE</h2>
            <div className='personalDataContainer'>
                <div className='personalDataRow'>
                    <div className='personalDataItem'>
                        <FormInput
                            type='select'
                            placeholder='Día libre'
                            name='daysClose'
                            value={daysClose}
                            onChange={onInputChange}
                            error={!!daysCloseValid && formSubmitted}
                            helperText={daysCloseValid}
                            options={optionsDayClosed}
                        />
                    </div>
                    <div className='personalDataItem'>
                        <FormInput
                            type='text'
                            placeholder='Capacidad restaurante'
                            name='capacity'
                            value={capacity}
                            onChange={onInputChange}
                            error={!!capacityValid && formSubmitted}
                            helperText={capacityValid}
                        />
                    </div>
                </div>
                <div className='personalDataRow'>
                    <FormInput
                        type='select'
                        placeholder='Intervalo de reservas'
                        name='intervalHourBooking'
                        value={intervalHourBooking}
                        onChange={onInputChange}
                        error={!!intervalHourBookingValid && formSubmitted}
                        helperText={intervalHourBookingValid}
                        options={optionsInterval}
                    />
                </div>
                <div className='personalDataRow'>
                    <div className='personalDataItem'>
                        <FormInput
                            type='select'
                            placeholder='Hora apertura comida'
                            name='openTimeLaunch'
                            value={openTimeLaunch}
                            onChange={onInputChange}
                            error={!!openTimeLaunchValid && formSubmitted}
                            helperText={openTimeLaunchValid}
                            options={optionsOpenLaunch}
                        />
                    </div>
                    <div className='personalDataItem'>
                        <FormInput
                            type='select'
                            placeholder='Hora apertura comida'
                            name='closeTimeLaunch'
                            value={closeTimeLaunch}
                            onChange={onInputChange}
                            error={!!closeTimeLaunchValid && formSubmitted}
                            helperText={closeTimeLaunchValid}
                            options={optionsCloseLaunch}
                        />
                    </div>
                </div>
                <div className='personalDataRow'>
                    <div className='personalDataItem'>
                        <FormInput
                            type='select'
                            placeholder='Hora apertura cena'
                            name='openTimeDinner'
                            value={openTimeDinner}
                            onChange={onInputChange}
                            error={!!openTimeDinnerValid && formSubmitted}
                            helperText={openTimeDinnerValid}
                            options={optionsOpenDinner}
                        />
                    </div>
                    <div className='personalDataItem'>
                        <FormInput
                            type='select'
                            placeholder='Hora apertura cena'
                            name='closeTimeDinner'
                            value={closeTimeDinner}
                            onChange={onInputChange}
                            error={!!closeTimeDinnerValid && formSubmitted}
                            helperText={closeTimeDinnerValid}
                            options={optionsCloseDinner}
                        />
                    </div>
                </div>

                <div className='personalDataRow'>
                    <div className='lastPersonalDataItem'>
                        <button>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigurationRestaurantForm;
