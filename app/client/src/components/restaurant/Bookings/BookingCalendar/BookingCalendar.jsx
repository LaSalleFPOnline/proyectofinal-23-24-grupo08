import React, { useRef, useEffect } from 'react';
import BookingCalendarTables from '../BookingCalendarTables/BookingCalendarTables';
import './bookingCalendarStyles.css';
import bookings from './content';
import BookingCards from '../BookingCards/BookingCards';
import { useData } from '../../../../hooks/useData';

const BookingCalendar = () => {
    const tablesNumber = 12;
    const scrollRef = useRef(null);
    const { data: dataBookings, isLoading, hasError, getData: getBookings } = useData();

    useEffect(() => {
        const scrollToTime = (time) => {
            const timeZoneElement = document.getElementById(`timeZone-${time}`);
            if (timeZoneElement) {
                timeZoneElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        scrollToTime('16:00');
        getBookings('/booking');
    }, []);

    useEffect(() => {
        console.log('----> DATABOOKING', dataBookings);
    }, [dataBookings]);

    const getTimeZones = () => {
        const timeZones = [];
        let hour = 12;
        let minute = 0;

        while (hour <= 23) {
            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            timeZones.push(time);

            if (minute === 30) {
                hour++;
                minute = 0;
            } else {
                minute = 30;
            }
        }

        return timeZones;
    };

    return (
        <>
            {dataBookings ? (
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
                            <div key={index} id={`timeZone-${time}`} className='timeZone'>
                                <p>{time}</p>
                                <div className='timeZoneForTable'>
                                    {Array.from({ length: tablesNumber }, (_, i) => (
                                        <div key={i} className='bookingOrder'>
                                            {dataBookings
                                                .filter((booking) => booking.time === time)
                                                .map((booking, index) =>
                                                    bookings[index].bookingTables[0] === i + 1 ? (
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
                                                    ) : null
                                                )}
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
