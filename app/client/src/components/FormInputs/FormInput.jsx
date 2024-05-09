import { useRef } from 'react';
import InputNumber from './Number/InputNumber';
import InputSelect from './Select/InputSelect';
import clsx from 'clsx';
import __isEmpty from 'lodash/isEmpty';
import styles from './formInput.module.scss';

function FormInput(props) {
    const { type, className, style, name, value, onChange, error, placeholder, helperText } = props;
    const inputRef = useRef(null);
    const CustomTag = type === 'textarea' ? 'textarea' : 'input';

    const stylesInput = clsx({
        [styles.fieldInput]: true,
        [styles[style]]: true,
        [styles.error]: error,
        [className]: !__isEmpty(className)
    });

    const stylesName = clsx({
        [styles.name]: true,
        [styles.active]: (inputRef.current === document.activeElement && value.lenght > 0) || value
    });

    switch (type) {
        case 'number':
            return <InputNumber {...props} />;
        case 'select':
            return <InputSelect {...props} />;
        default:
            return (
                <div className={stylesInput}>
                    <span className={stylesName}>{placeholder}</span>
                    <CustomTag
                        ref={inputRef}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                    {error && <span className={styles.error}>{helperText}</span>}
                </div>
            );
    }
}

FormInput.defaultProps = {
    style: 'default'
};

export default FormInput;
