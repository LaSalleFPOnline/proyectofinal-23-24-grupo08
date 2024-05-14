import { ReactSVG } from 'react-svg';
import __isEmpty from 'lodash/isEmpty';
import clsx from 'clsx';
import styles from './icon.module.scss';

const Icon = (props) => {
    const { icon, alt, className, size, color, hoverColor, style } = props;

    const iconStyle = clsx({
        [styles.icon]: true,
        [className]: !__isEmpty(className),
        [styles[color]]: !!color,
        [styles[style]]: !!style,
        [styles[`hover-${hoverColor}`]]: !!hoverColor
    });

    return (
        <ReactSVG
            style={{ width: size, height: size }}
            className={iconStyle}
            beforeInjection={(svg) => {
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
            }}
            src={`${import.meta.env.VITE_URL_RESOURCES}/icons/${icon}.svg`}
            wrapper='svg'
            aria-label={alt}
        />
    );
};

Icon.defaultProps = {
    icon: '',
    alt: '',
    className: '',
    size: 32
};

export default Icon;
