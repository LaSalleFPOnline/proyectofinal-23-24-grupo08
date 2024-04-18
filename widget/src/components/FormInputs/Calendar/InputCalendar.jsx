import { useState } from 'react';
import { useRestaurant } from '../../../hooks/useRestaurant';
import { useBooking } from '../../../hooks/useBooking';
import { getFormatDate, getFormatDateHuman } from '../../../helpers/dateHelper';
import Calendar from 'react-calendar';
import Icon from '../../Icon/Icon';
import Loading from '../../Loading/Loading';
import __isEmpty from 'lodash/isEmpty';
import clsx from 'clsx';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';
import styles from './inputCalendar.module.scss';

const InputCalendar = (props) => {
    const { className, style, name, value, onChange, error, helperText } = props;
    const { restaurantCalendar } = useRestaurant();
    const { loadingHours, getBusyHours } = useBooking();
    const { busyDays, daysClose } = restaurantCalendar;
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectDate, setSelectDate] = useState(false);

    const stylesCalendar = clsx({
        [styles.contentCalendar]: true,
        [className]: !__isEmpty(className),
        [styles[style]]: true
    });

    return (
        <div className={stylesCalendar}>
            <div
                className={styles.inputCalendari}
                aria-label='input-calendar'
                onClick={() => {
                    if (!value) onChange({ target: { name, value: new Date() } });

                    setShowCalendar(!showCalendar);
                }}
            >
                {selectDate ? getFormatDateHuman(value) : 'Seleccione fecha'}
                <Icon icon='ico-calendar' alt='calendar' className={styles.iconaCalendari} size={20} />
            </div>

            {showCalendar && (
                <>
                    {loadingHours && (
                        <div className={styles.loadingContainer}>
                            <Loading />
                        </div>
                    )}
                    <Calendar
                        style={{ height: 500 }}
                        onChange={(value) => {
                            onChange({ target: { name, value: getFormatDate(value) } });
                            setSelectDate(true);
                            getBusyHours(value);
                            setShowCalendar(false);
                        }}
                        onActiveStartDateChange={({ activeStartDate }) => {
                            console.log('onActiveStartDateChange >> ', activeStartDate);
                        }}
                        value={value}
                        className={styles.calendar}
                        tileClassName={({ date, view }) => {
                            if (
                                !__isEmpty(busyDays) &&
                                busyDays.find((dateNonAvailable) => dateNonAvailable === getFormatDate(date))
                            ) {
                                return styles.hightlight;
                            }
                        }}
                        tileDisabled={({ date }) => {
                            return !__isEmpty(daysClose) && daysClose.includes(date.getDay());
                        }}
                        prev2Label={null}
                        next2Label={null}
                        minDate={new Date()}
                    />
                    <span
                        className={styles.bgCalendar}
                        onClick={() => {
                            setShowCalendar(false);
                        }}
                    />
                </>
            )}

            {error && <span className={styles.error}>{helperText}</span>}
        </div>
    );
};

export default InputCalendar;
