import { getIntervalHours } from '../../../helpers/dateHelper';
import { useRestaurant } from '../../../hooks/useRestaurant';
import { useBooking } from '../../../hooks/useBooking';
import Separator from '../../Separator/Separator';
import Loading from '../../Loading/Loading';
import Option from './Option';

import clsx from 'clsx';
import __isEmpty from 'lodash/isEmpty';
import styles from './inputHours.module.scss';

const InputHours = (props) => {
    const { className, style, name, value, onChange, error, helperText } = props;
    const { loadingHours, dataHours, bookingData } = useBooking();
    const { restaurantCalendar } = useRestaurant();
    const launchHours = getIntervalHours(
        restaurantCalendar.openHours.launch.start,
        restaurantCalendar.openHours.launch.end,
        restaurantCalendar.openHours.intervalHourBooking
    );
    const dinnerHours = getIntervalHours(
        restaurantCalendar.openHours.dinner.start,
        restaurantCalendar.openHours.dinner.end,
        restaurantCalendar.openHours.intervalHourBooking
    );

    const stylesInputRadio = clsx({
        [styles.contentInputRadio]: true,
        [className]: !__isEmpty(className),
        [styles[style]]: true
    });

    return (
        <div className={stylesInputRadio}>
            {loadingHours && <Loading style={style} color={style} />}
            <div className={styles.contentHours}>
                <div className={styles.franjaHour}>
                    <p>Comida</p>

                    {launchHours.map((hour, index) => {
                        return (
                            <Option
                                key={`option-launch-hour-${index}`}
                                name={name}
                                value={hour.value}
                                text={hour.text}
                                selected={value === hour.value}
                                disabled={__isEmpty(bookingData?.date) || dataHours.includes(hour.value)}
                                onChange={onChange}
                                style={style}
                                estil='hores'
                            />
                        );
                    })}
                </div>
                <Separator style='full' />
                <div className={styles.franjaHour}>
                    <p>Cena</p>

                    {dinnerHours.map((hour, index) => {
                        return (
                            <Option
                                key={`option-dinner-hour-${index}`}
                                name={name}
                                value={hour.value}
                                text={hour.text}
                                selected={value === hour.value}
                                disabled={__isEmpty(bookingData?.date) || dataHours.includes(hour.value)}
                                onChange={onChange}
                                style={style}
                                estil='hores'
                            />
                        );
                    })}
                </div>
            </div>

            {error && <span className={styles.error}>{helperText}</span>}
        </div>
    );
};

export default InputHours;

InputHours.defaultProps = {
    className: null,
    style: 'default'
};
