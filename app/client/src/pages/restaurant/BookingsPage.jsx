import React from 'react';
import { useUser } from '../../hooks/useUser';
import RestaurantNavBar from '../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './bookingStyles.css';
import BookingCards from '../../components/restaurant/Bookings/BookingCards/BookingCards';
import BookingCalendar from '../../components/restaurant/Bookings/BookingCalendar/BookingCalendar';
import { useData } from '../../hooks/useData';
import { useEffect } from 'react';

const BookingsPage = (props) => {
    const { idRestaurant } = props;
    const { name } = useUser();

    const { data: dataBookings, isLoading, hasError, getData: getBookings } = useData();

    useEffect(() => {
        getBookings('/booking');
    }, []);

    console.log('*** BOOKINGS RESTAURANT PAGE useUser -> ', {
        name,
        idRestaurant
    });

    return (
        <>
            {!dataBookings ? (
                <p> Loading... </p>
            ) : (
                <>
                    <RestaurantNavBar />
                    <div className='mainBookingsContainer'>
                        <div className='bookingsPreview'>
                            <div className='activeBookings'>
                                <h2>Active Bookings</h2>
                                <div className='bookingsSections'>
                                    {dataBookings.map((booking, index) => (
                                        <BookingCards
                                            key={`booking-card-${index}`}
                                            time={booking.time}
                                            numberOfPeople={booking.guests}
                                            assignedTables={[1, 2]}
                                            reservationName={booking.name}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='upcomingBookings'>
                                <h2>Upcoming Bookings</h2>
                                <div className='bookingsSections'>
                                    <BookingCards
                                        time='12:00'
                                        numberOfPeople={4}
                                        assignedTables={[1, 2]}
                                        reservationName='John Doe'
                                    />
                                    <BookingCards
                                        time='12:00'
                                        numberOfPeople={4}
                                        assignedTables={[1, 2]}
                                        reservationName='John Doe'
                                    />
                                    <BookingCards
                                        time='12:00'
                                        numberOfPeople={4}
                                        assignedTables={[1, 2]}
                                        reservationName='John Doe'
                                    />
                                    <BookingCards
                                        time='12:00'
                                        numberOfPeople={4}
                                        assignedTables={[1, 2]}
                                        reservationName='John Doe'
                                    />
                                    <BookingCards
                                        time='12:00'
                                        numberOfPeople={4}
                                        assignedTables={[1, 2]}
                                        reservationName='John Doe'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='bookings'>
                            <BookingCalendar dataBookings={dataBookings} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default BookingsPage;
