import React from 'react';
import { useUser } from '../../hooks/useUser';
import RestaurantNavBar from '../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './bookingStyles.css';
import BookingCards from '../../components/restaurant/Bookings/BookingCards/BookingCards';
import BookingCalendar from '../../components/restaurant/Bookings/BookingCalendar/BookingCalendar';
import { useData } from '../../hooks/useData';
import { useEffect } from 'react';

const BookingsPage = (props) => {
    const { restaurantId } = useUser();
    const { data: dataBookings, isLoading, hasError, getData: getBookings } = useData();

    useEffect(() => {
        getBookings(`/restaurant/${restaurantId}/bookings`);
    }, []);

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
                                <h2>Reservas activas</h2>
                                <div className='bookingsSections'>
                                    {dataBookings.data.map((booking, index) => (
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
                                <h2>Proximas reservas</h2>
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
                            <BookingCalendar dataBookings={dataBookings.data} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default BookingsPage;
