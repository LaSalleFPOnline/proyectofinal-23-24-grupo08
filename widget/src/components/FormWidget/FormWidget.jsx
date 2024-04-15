import __isEmpty from 'lodash/isEmpty';
import { FORM_TYPES } from './formWidgetTypes';
import { useBooking } from '../../hooks/useBooking';

import clsx from 'clsx';
import styles from './formWidget.module.scss';
import { useEffect } from 'react';

export default function FormWidget(props) {
    const { type } = props;
    const { configRestaurant } = useBooking();
    const _isFormType = (_type) => {
        return type === _type;
    };

    const classWidgetContainer = clsx('bg-blue-500 text-white p-4 my-5', {
        'font-bold rounded-lg': _isFormType(FORM_TYPES.special)
    });

    useEffect(() => {
        console.log('*** CONFIG RESTAURANT --> ', configRestaurant);
    }, [configRestaurant]);

    return (
        <div className={classWidgetContainer}>
            <p>Form Widget Component type: {type}</p>
        </div>
    );
}

FormWidget.defaultProps = {
    type: FORM_TYPES.default
};
