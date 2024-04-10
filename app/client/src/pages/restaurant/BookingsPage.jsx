import React from 'react';
import { useUser } from '../../hooks/useUser';
import RestaurantNavBar from '../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './bookingStyles.css';
import BookingCards from '../../components/restaurant/Bookings/BookingCards/BookingCards';
import BookingCalendar from '../../components/restaurant/Bookings/BookingCalendar/BookingCalendar';

const BookingsPage = (props) => {
    const { idRestaurant } = props;
    const { name } = useUser();
    console.log('*** BOOKINGS RESTAURANT PAGE useUser -> ', { name, idRestaurant });

    return (
        <>
            <RestaurantNavBar/>
            <div className="mainBookingsContainer">
                <div className="bookingsPreview">
                    <div className="activeBookings">
                        <h2>Active Bookings</h2>
                        <div className="bookingsSections">
                            <BookingCards
                            time="12:00"
                            numberOfPeople={4}
                            assignedTables={[1, 2]}
                            reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                        </div>
                        
                    </div>
                    <div className="upcomingBookings">
                        <h2>Upcoming Bookings</h2>
                        <div className="bookingsSections">
                            <BookingCards
                            time="12:00"
                            numberOfPeople={4}
                            assignedTables={[1, 2]}
                            reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                            <BookingCards
                                time="12:00"
                                numberOfPeople={4}
                                assignedTables={[1, 2]}
                                reservationName="John Doe"
                            />
                        </div>
                    </div>
                </div>
                <div className="bookings">
                    <BookingCalendar />
                </div>
            </div>
        </>
    );
};

export default BookingsPage;
