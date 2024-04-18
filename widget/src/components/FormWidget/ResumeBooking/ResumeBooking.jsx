import { useBooking } from '../../../hooks/useBooking';
import Icon from '../../Icon/Icon';
import styles from './resumeBooking.module.scss';

const ResumeBooking = (props) => {
    const { bookingData } = useBooking();
    const { date, time } = bookingData;

    return (
        <div className={styles.resumeBooking}>
            <h5>Fecha y hora seleccionada</h5>
            {date && (
                <div className={styles.line}>
                    <Icon icon='ico-calendar' alt='dia' size={19} className={styles.resumeIcon} />
                    <p>{date}</p>
                </div>
            )}
            {time && (
                <div className={styles.line}>
                    <Icon icon='ico-clock' alt='horario' size={19} className={styles.resumeIcon} />
                    <p>{time}</p>
                </div>
            )}
        </div>
    );
};

export default ResumeBooking;
