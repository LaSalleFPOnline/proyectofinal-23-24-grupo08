import React, { useRef, useEffect } from 'react';
import BookingCalendarTables from '../BookingCalendarTables/BookingCalendarTables';
import './bookingCalendarStyles.css';
import bookings from './content';
import BookingCards from '../BookingCards/BookingCards';
import { useData } from '../../../../hooks/useData';
import { getFormatTime, getIntervalHours } from '../../../../helpers/dateHelper';
import { useUser } from '../../../../hooks/useUser';

const BookingCalendar = (props) => {
    const { dataBookings } = props;
    const { config } = useUser();
    const tablesNumber = 12;
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollToTime = (time) => {
            const timeZoneElement = document.getElementById(`timeZone-${time}`);
            if (timeZoneElement) {
                timeZoneElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        scrollToTime('13:00');
    }, []);

    const getTimeZones = () => {
        const launchHours = getIntervalHours(config.launch.start, config.launch.end, config.intervalHourBooking);
        const dinnerHours = getIntervalHours(config.dinner.start, config.dinner.end, config.intervalHourBooking);

        const getTimeValues = (hours) => hours.map((hour) => hour.value);

        const timeZones = [...getTimeValues(launchHours), ...getTimeValues(dinnerHours)];

        return timeZones;
    };

    return (
        <>
            {!dataBookings ? (
                <p> Loading... </p>
            ) : (
                <div className='bookingCalendarMainContainer'>
                    <div className='tablesRow'>
                        {Array.from({ length: tablesNumber }, (_, i) => (
                            <BookingCalendarTables key={i} mesa={i + 1} />
                        ))}
                    </div>
                    <div className='bookingsTimeZones'>
                        {getTimeZones().map((time, index) => (
                            <div key={`bookingsTimeZones-${index}`} id={`timeZone-${time}`} className='timeZone'>
                                <p>{time}</p>
                                <div className='timeZoneForTable'>
                                    {Array.from({ length: tablesNumber }, (_, i) => (
                                        <div key={i} className='bookingOrder'>
                                            {dataBookings
                                                .filter((booking) => booking.time === getFormatTime(time))
                                                .map((booking, index) => {
                                                    return bookings[index].bookingTables[0] === i + 1 ? (
                                                        <BookingCards
                                                            key={index}
                                                            time={booking.time}
                                                            numberOfPeople={booking.guests}
                                                            assignedTables={bookings[index].bookingTables}
                                                            reservationName={booking.name}
                                                            width={300 * bookings[index].bookingTables.length}
                                                            left={
                                                                bookings[index].bookingTables.length === 2
                                                                    ? 150 * (bookings[index].bookingTables.length / 2)
                                                                    : bookings[index].bookingTables.length > 2
                                                                      ? 150 * (bookings[index].bookingTables.length - 1)
                                                                      : undefined
                                                            }
                                                        />
                                                    ) : null;
                                                })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingCalendar;
