import clsx from 'clsx';
import styles from './separator.module.scss';

function Separator(props) {
    const { style, color, size } = props;
    const separatorStyle = clsx({
        [styles.separator]: true,
        [styles[color]]: true,
        [styles[style]]: true,
        [styles[size]]: true
    });

    return <span className={separatorStyle}></span>;
}

Separator.defaultProps = {
    color: 'default'
};

export default Separator;
