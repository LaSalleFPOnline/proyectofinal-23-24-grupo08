import { useRef } from 'react';
import __isEmpty from 'lodash/isEmpty';
import Icon from '../../Icon/Icon';
import clsx from 'clsx';
import styles from '../formInput.module.scss';

const InputSelect = (props) => {
    const { className, style, name, value, onChange, error, placeholder, helperText, options } = props;
    const inputRef = useRef(null);

    const stylesInput = clsx({
        [styles.fieldInput]: true,
        [styles[style]]: true,
        [styles.error]: error,
        [styles.activeSelect]: (inputRef.current === document.activeElement && value.lenght > 0) || value,
        [className]: !__isEmpty(className)
    });

    const stylesName = clsx({
        [styles.name]: true,
        [styles.active]: (inputRef.current === document.activeElement && value.lenght > 0) || value
    });

    return (
        <div className={stylesInput}>
            <span className={stylesName}>{placeholder}</span>
            <div className={styles.selectWrapper}>
                <select name={name} value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option key={`option-${name}-${option.value}`} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>

            {error && <span className={styles.error}>{helperText}</span>}
        </div>
    );
};

export default InputSelect;
