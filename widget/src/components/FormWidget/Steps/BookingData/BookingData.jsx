import FormInput from '../../../FormInputs/FormInput';
import Separator from '../../../Separator/Separator';
import styles from './bookingData.module.scss';

const BookingData = (props) => {
    const { onInputChange, fields, fieldsValid, stepSubmitted, style } = props;
    const { date, time } = fields;
    const { dateValid, timeValid } = fieldsValid;

    return (
        <>
            <div className={styles.contentTitle}>
                <h2>Haga su reserva</h2>
            </div>
            <div className={styles.contentText}>
                <p>Rellene los datos</p>
            </div>
            <div className={styles.contentFieldForm}>
                <FormInput
                    type='calendar'
                    name='date'
                    value={date}
                    onChange={onInputChange}
                    error={!!dateValid && stepSubmitted}
                    helperText={dateValid}
                    style={style}
                />
            </div>
            <Separator style='full' />
            <div className={styles.contentFieldForm}>
                <p>Seleccione hora</p>
                <FormInput
                    type='hours'
                    name='time'
                    value={time}
                    onChange={onInputChange}
                    style={style}
                    error={!!timeValid && stepSubmitted}
                    helperText={timeValid}
                />
            </div>
            <Separator style='full' />
        </>
    );
};

export default BookingData;
