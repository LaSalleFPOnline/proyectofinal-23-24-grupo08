import clsx from 'clsx';
import __isEmpty from 'lodash/isEmpty';
import Icon from '../../Icon/Icon';
import styles from './inputNumber.module.scss';

const InputNumber = (props) => {
    const { className, style, name, value, onChange, error, min, max } = props;

    const setMinus = (e) => {
        e.preventDefault();
        if (parseInt(value) > min) onChange({ target: { name, value: parseInt(value) - 1 } });
    };

    const setPlus = (e) => {
        e.preventDefault();
        if (parseInt(value) < max) onChange({ target: { name, value: parseInt(value) + 1 } });
    };

    const stylesMinus = clsx({
        [styles.buttonNumber]: true,
        [styles.disabled]: parseInt(value) <= min
    });

    const stylesPlus = clsx({
        [styles.buttonNumber]: true,
        [styles.disabled]: parseInt(value) >= max
    });

    return (
        <div className={styles.contNumber}>
            <button className={stylesMinus} onClick={setMinus} disabled={parseInt(value) <= min}>
                <Icon icon='ico-minus-circle' alt='minus' size={26} color='black' hoverColor='white' />
            </button>
            <span className={styles.valueNumber}>{value}</span>
            <button className={stylesPlus} onClick={setPlus} disabled={parseInt(value) >= max}>
                <Icon icon='ico-plus-circle' alt='plus' size={24} color='black' hoverColor='white' />
            </button>

            {error && <span className={`${styles.error} xs`}>{helperText}</span>}
        </div>
    );
};

export default InputNumber;

InputNumber.defaultProps = {
    className: null,
    style: 'gris',
    min: 1,
    max: 200
};
