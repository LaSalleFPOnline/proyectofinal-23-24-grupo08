import React, { useEffect } from 'react';
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
import styles from '../configurationForm.module.scss';

const SuccessForm = (props) => {
    const { respForm, formState } = props;
    const { updateConfig } = useUser();

    console.log('**************** SUCCESS FORM ---> ', respForm);

    useEffect(() => {
        if (respForm?.status === 'OK') {
            updateConfig(formState);
        }
    }, []);

    return respForm?.status === 'OK' ? (
        <div className={styles.formSuccess}>Cambios guardados correctamente</div>
    ) : (
        <div className={styles.formError}>Ha habido un error al guardar los cambios</div>
    );
};
const ConfigurationRestaurantForm = () => {
    const { restaurantId, config } = useUser();

    const formData = {
        daysClosed: config?.daysClosed,
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

        daysClosed,
        capacity,
        intervalHourBooking,
        openTimeLaunch,
        closeTimeLaunch,
        openTimeDinner,
        closeTimeDinner,

        isFormValid,
        daysClosedValid,
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
        <div className={styles.personalDataMainContainer}>
            {(responseForm || hasSendingError) && <SuccessForm respForm={responseForm} formState={formState} />}
            <h2>CONFIGURACIÓN RESTAURANTE</h2>
            <form className={styles.personalDataContainer} onSubmit={onSubmit}>
                <div className={styles.personalDataRow}>
                    <div className={styles.personalDataItem}>
                        <FormInput
                            type='select'
                            placeholder='Día libre'
                            name='daysClosed'
                            value={daysClosed}
                            onChange={onInputChange}
                            error={!!daysClosedValid && formSubmitted}
                            helperText={daysClosedValid}
                            options={optionsDayClosed}
                        />
                    </div>
                    <div className={styles.personalDataItem}>
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
                <div className={styles.personalDataRow}>
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
                <div className={styles.personalDataRow}>
                    <div className={styles.personalDataItem}>
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
                    <div className={styles.personalDataItem}>
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
                <div className={styles.personalDataRow}>
                    <div className={styles.personalDataItem}>
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
                    <div className={styles.personalDataItem}>
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

                <div className={styles.personalDataRow}>
                    <div className={styles.lastPersonalDataItem}>
                        <button type='submit'>Guardar cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ConfigurationRestaurantForm;
