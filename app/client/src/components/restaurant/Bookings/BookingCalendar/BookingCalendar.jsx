import React, { useRef, useEffect } from 'react';
import BookingCalendarTables from '../BookingCalendarTables/BookingCalendarTables';
import './bookingCalendarStyles.css';
import  bookings  from './content'
import BookingCards from '../BookingCards/BookingCards';

const BookingCalendar = () => {
    const tablesNumber = 12;
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollToTime = (time) => {
            const timeZoneElement = document.getElementById(`timeZone-${time}`);
            if (timeZoneElement) {
                timeZoneElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };

        scrollToTime("16:00");
    }, []);

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
    }

    return (
        <div className="bookingCalendarMainContainer">
            <div className="tablesRow">
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
                                <div key={i} className='bookingOrder' >
                                    { 
                                    bookings.filter(booking => booking.bookingTime === time).map((booking, index) => (
                                        booking.bookingTables[0] === i + 1 ? (
                                            <BookingCards
                                            key={index}
                                            time={booking.bookingTime}
                                            numberOfPeople={booking.bookingPeople}
                                            assignedTables={booking.bookingTables}
                                            reservationName={booking.bookingName}
                                            width={300 * booking.bookingTables.length}
                                            left={
                                                booking.bookingTables.length === 2
                                                    ? 150 * (booking.bookingTables.length / 2)
                                                    : booking.bookingTables.length > 2
                                                        ? 150 * (booking.bookingTables.length - 1)
                                                        : undefined
                                            }
                                            />
                                        ) : (null)
                                    ))
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingCalendar;
