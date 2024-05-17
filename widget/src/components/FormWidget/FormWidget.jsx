import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useBooking } from '../../hooks/useBooking';
import { formValidations } from '../../helpers/formHelper';
import StepsLine from './StepsLine/StepsLine';
import ErrorForm from './Steps/ErrorForm/ErrorForm';
import SuccessForm from './Steps/SuccessForm/SuccessForm';
import BookingData from './Steps/BookingData/BookingData';
import PersonalData from './Steps/PersonalData/PersonalData';
import Button from '../Button/Button';

import { FORM_TYPES } from './formWidgetTypes';

import __isEmpty from 'lodash/isEmpty';
import __isUndefined from 'lodash/isUndefined';
import clsx from 'clsx';
import styles from './formWidget.module.scss';
import { useRestaurant } from '../../hooks/useRestaurant';

const formData = {
    idRestaurant: '',
    date: '',
    time: '',
    guests: 2,
    comments: '',
    name: '',
    email: '',
    phone: ''
};

const FormWidget = (props) => {
    const { type, style } = props;
    const { updateBooking } = useBooking();
    const { restaurantId } = useRestaurant();
    const [stepActive, setStepActive] = useState(1);
    const [stepDadesReservaSubmitted, setStepDadesReservaSubmitted] = useState(false);
    formData.idRestaurant = restaurantId;
    const errorBooking = false;

    const numSteps = 3;

    const {
        formState,
        onInputChange,
        onSubmit,
        formSubmitted,
        checkedValidateFields,
        onResetForm,

        date,
        time,
        guests,
        comments,
        name,
        email,
        phone,

        isFormValid,
        dateValid,
        timeValid,
        guestsValid,
        commentsValid,
        nameValid,
        emailValid,
        phoneValid,

        responseForm,
        isLoadingForm,
        hasSendingError
    } = useForm(formData, formValidations, '/booking');

    const _isFormType = (_type) => {
        return type === _type;
    };

    useEffect(() => {
        updateBooking(formState);
    }, [formState]);

    const classWidgetContainer = clsx('bg-blue-500 text-white p-4 my-5', {
        'font-bold rounded-lg': _isFormType(FORM_TYPES.special)
    });

    useEffect(() => {
        if ((responseForm || hasSendingError) && stepActive < numSteps) setStepActive(stepActive + 1);
    }, [responseForm, hasSendingError]);

    const handleNext = (e) => {
        e.preventDefault();

        if (stepActive === 1) {
            const valid = checkedValidateFields(['date', 'time']);
            setStepDadesReservaSubmitted(true);
            if (valid) setStepActive(stepActive + 1);
        } else {
            setStepActive(stepActive + 1);
        }
    };

    const handlePrev = (e) => {
        e.preventDefault();
        if (stepActive === 1) {
        } else if (stepActive === 2) {
            setStepDadesReservaSubmitted(false);
        }
        setStepActive(stepActive - 1);
    };

    return (
        <>
            <ErrorForm errorBooking={errorBooking} />
            <StepsLine numSteps={numSteps} stepActive={stepActive} setStepActive={setStepActive} />

            <div className={styles.contentSteps}>
                {responseForm || hasSendingError ? (
                    <SuccessForm respForm={responseForm} style={style} />
                ) : (
                    <form className={styles.form} onSubmit={onSubmit}>
                        {stepActive === 1 && (
                            <BookingData
                                onInputChange={onInputChange}
                                fields={{
                                    date,
                                    time
                                }}
                                fieldsValid={{
                                    dateValid,
                                    timeValid
                                }}
                                stepSubmitted={stepDadesReservaSubmitted}
                                style={style}
                            />
                        )}

                        {stepActive === 2 && (
                            <PersonalData
                                onInputChange={onInputChange}
                                fields={{
                                    guests,
                                    name,
                                    email,
                                    phone,
                                    comments
                                }}
                                fieldsValid={{
                                    guestsValid,
                                    nameValid,
                                    emailValid,
                                    phoneValid,
                                    commentsValid
                                }}
                                formSubmitted={formSubmitted}
                                style={style}
                            />
                        )}
                        <div className={styles.buttonsSteps}>
                            {stepActive > 1 && <Button onClick={handlePrev} icon='ico-left-arrow' />}
                            {stepActive < numSteps - 1 && (
                                <Button text='continuar' onClick={handleNext} icon='ico-right-arrow' isRightIcon={true} />
                            )}
                            {stepActive === 2 && (
                                <Button text={isLoadingForm ? 'Reservando' : 'Reservar'} type='submit' disabled={isLoadingForm} />
                            )}
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

FormWidget.defaultProps = {
    type: FORM_TYPES.default
};

export default FormWidget;
