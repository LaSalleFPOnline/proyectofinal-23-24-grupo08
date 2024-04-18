import Icon from '../../../Icon/Icon';
import __isEmpty from 'lodash/isEmpty';
import clsx from 'clsx';
import styles from './errorForm.module.scss';

const ErrorForm = (props) => {
    const { className, style, errorBooking } = props;

    const stylesErrorContainer = clsx({
        [styles.errorContainer]: true,
        [className]: !__isEmpty(className),
        [styles[style]]: true
    });

    if (!errorBooking) return <></>;

    return (
        <div className={stylesErrorContainer}>
            <div className={styles.errorBlock}>
                <Icon icon='error' alt='Error' size={60} className={styles.errorIcon} />
                <div className={styles.textError}>Ha ocurrido un error en procesar su petición. Intentelo de nuevo más tarde</div>
            </div>
        </div>
    );
};

ErrorForm.defaultProps = {
    style: 'default'
};

export default ErrorForm;
