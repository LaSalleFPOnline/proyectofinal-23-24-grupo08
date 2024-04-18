import clsx from 'clsx';
import __isEmpty from 'lodash/isEmpty';
import styles from './button.module.scss';
import Icon from '../Icon/Icon';

const ButtonIcon = (props) => {
    const { icon, isRightIcon, iconInline, textColor } = props;

    if (!icon) return props.children;

    const stylesIcona = clsx({
        [styles.icon]: true,
        [styles.onlyIcon]: !!props.children,
        [styles.left]: isRightIcon
    });

    const iconComponent = <Icon className={stylesIcona} icon={icon} inline={iconInline} alt='icon' mida='16' color={textColor} />;

    return (
        <>
            {!isRightIcon && iconComponent}
            {props.children}
            {isRightIcon && iconComponent}
        </>
    );
};

const _buttonContent = (props) => {
    const { text, icon, isRightIcon, iconInline, textColor } = props;

    return (
        <ButtonIcon icon={icon} isRightIcon={isRightIcon} iconInline={iconInline} textColor={textColor}>
            <span className={styles.label}>{text}</span>
        </ButtonIcon>
    );
};

const Button = (props) => {
    const { text, name, className, style, icon, onClick, selected } = props;

    const stylesButton = clsx({
        [styles.button]: true,
        [styles.selected]: !!selected,
        [styles[style]]: true,
        [styles[icon]]: true,
        [className]: !__isEmpty(className)
    });

    return (
        <button className={stylesButton} name={name} onClick={onClick}>
            {_buttonContent({ ...props, ...text })}
        </button>
    );
};

Button.defaultProps = {
    onClick: undefined
};

export default Button;
