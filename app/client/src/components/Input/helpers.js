export function findInputError(errors, name) {
    const filtered = Object.keys(errors)
        .filter((key) => key.includes(name))
        .reduce((cur, key) => {
            return Object.assign(cur, { error: errors[key] });
        }, {});
    return filtered;
}

export const firstname_validation = {
    name: 'firstName',
    label: 'Nombre',
    type: 'text',
    id: 'firstName',
    placeholder: 'Nombre',
    validation: {
        required: {
            value: true,
            message: 'required'
        }
    }
};

export const lastname_validation = {
    name: 'lastName',
    label: 'Apellido',
    type: 'text',
    id: 'lastName',
    placeholder: 'Apellido',
    validation: {
        required: {
            value: true,
            message: 'required'
        }
    }
};

export const desc_validation = {
    name: 'description',
    label: 'description',
    multiline: true,
    id: 'description',
    placeholder: 'write description ...',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        maxLength: {
            value: 200,
            message: '200 characters max'
        }
    }
};

export const password_validation = {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    placeholder: 'Password',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        minLength: {
            value: 6,
            message: 'min 6 characters'
        }
    }
};

export const num_validation = {
    name: 'num',
    label: 'number',
    type: 'number',
    id: 'num',
    placeholder: 'write a number',
    validation: {
        required: {
            value: true,
            message: 'required'
        }
    }
};

export const email_validation = {
    name: 'email',
    label: 'Email',
    type: 'email',
    id: 'email',
    placeholder: 'Email',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'not valid'
        }
    }
};

export const nameRestaurant_validation = {
    name: 'nameRestaurant',
    label: 'Nombre restaurante',
    type: 'text',
    id: 'nameRestaurant',
    placeholder: 'Nombre restaurante',
    validation: {
        required: {
            value: true,
            message: 'required'
        }
    }
};

export const isFormInvalid = (err) => {
    if (Object.keys(err).length > 0) return true;
    return false;
};
