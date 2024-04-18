import { isDateValid } from './dateHelper';

const formValidations = {
    name: [(value) => value?.length > 1, 'El nombre es obligatorio'],
    email: [(value) => value?.includes('@'), 'El mail introducido no tiene el formato correcto'],
    subject: [(value) => value?.length > 1, 'El asunto es obligatorio'],
    phone: [(value) => value?.length > 1, 'El telefono introducido no tiene el formato correcto'],
    date: [(value) => isDateValid(value), 'Debes seleccionar un dia'],
    time: [(value) => value?.length > 1, 'Debes seleccionar una hora']
};

export { formValidations };
