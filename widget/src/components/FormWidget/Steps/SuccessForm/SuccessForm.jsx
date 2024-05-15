import Icon from '../../../Icon/Icon';
import styles from './successForm.module.scss';

const SuccessForm = (props) => {
    const { respForm } = props;

    return respForm?.status === 'OK' ? (
        <>
            <div className={styles.contentTitle}>
                <h2>Su reserva se ha efectuado con exito</h2>
            </div>
            <div className={styles.contentText}>
                <div className={styles.resumeExit}>
                    <div>
                        <div className={styles.line}>
                            <Icon icon='ico-calendar' alt='dia' size={19} color='fosc' className={styles.resumeIcon} />
                            <p>{respForm.data.date}</p>
                        </div>
                        <div className={styles.line}>
                            <Icon icon='ico-rellotge' alt='horari' size={19} color='fosc' className={styles.resumeIcon} />
                            <p>{respForm.data.time}</p>
                        </div>
                        <div className={styles.line}>
                            <Icon icon='ico-pers' alt='persones' size={19} color='fosc' className={styles.resumeIcon} />
                            <p>{respForm.data.guests} personas</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className={styles.contentTitle}>
                <h2>No se ha podido realizar la reserva</h2>
            </div>
            <div className={styles.contentTextError}>
                <Icon icon='error' alt='Error' size={24} className={styles.errorIcon} />
                <p>Hemos tenido un error al procesar su petición. Intentelo más tarde</p>
            </div>
        </>
    );
};

export default SuccessForm;
