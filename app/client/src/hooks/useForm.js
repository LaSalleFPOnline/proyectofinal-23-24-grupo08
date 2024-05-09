import { useEffect, useMemo, useState } from 'react';
import { useData } from './useData';
import __isUndefined from 'lodash/isUndefined';

export const useForm = (initialForm = {}, formValidations = {}, formEndpoint = '', protocol = 'POST') => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorForm, setErrorForm] = useState(false);
    const { postData, putData, data, isLoading, hasError } = useData();

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        createValidators();
    }, [formState]);

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation]);

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys(formState)) {
            if (formValidations[formField]) {
                const [fn, errorMessage] = formValidations[formField];
                formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            }
        }
        setFormValidation(formCheckedValues);
    };

    const checkedValidateFields = (fields) =>
        __isUndefined(fields.find((field) => !__isUndefined(formValidation[`${field}Valid`]) && formValidation[`${field}Valid`]));

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (isFormValid) setErrorForm(true);

        if (isFormValid && formEndpoint) {
            if (protocol === 'POST') {
                postData(formEndpoint, formState);
            } else if (protocol === 'PUT') {
                putData(formEndpoint, formState);
            }
        }
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onSubmit,
        formSubmitted,
        errorForm,
        isFormValid,
        ...formValidation,
        checkedValidateFields,

        responseForm: data,
        isLoadingForm: isLoading,
        hasSendingError: hasError
    };
};
