import __isEmpty from 'lodash/isEmpty';
import clsx from 'clsx';
import styles from './loading.module.scss';

const Loading = (props) => {
    const { className, color, style } = props;

    const stylesLoading = clsx({
        [styles.ldsRing]: true,
        [styles[color]]: true
    });

    const stylesLoadingContainer = clsx({
        [styles.loadingContainer]: true,
        [className]: !__isEmpty(className),
        [styles[style]]: true
    });

    return (
        <div className={stylesLoadingContainer}>
            <div className={stylesLoading}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
