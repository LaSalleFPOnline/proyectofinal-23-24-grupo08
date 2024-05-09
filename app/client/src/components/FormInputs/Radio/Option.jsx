import __isEmpty from 'lodash/isEmpty';
import clsx from 'clsx';
import styles from '../formInput.module.scss';

const Option = (props) => {
    const { name, value, text, selected, disabled, onChange, style } = props;

    const stylesOption = clsx({
        [styles.option]: true,
        [styles.selected]: selected,
        [styles.disabled]: disabled,
        [styles[style]]: true
    });

    return (
        <button
            className={stylesOption}
            aria-label='option'
            onClick={(e) => {
                e.preventDefault();
                onChange({ target: { name, value } });
            }}
        >
            <span>{text}</span>
        </button>
    );
};

export default Option;

Option.defaultProps = {
    selected: false,
    disabled: false
};
