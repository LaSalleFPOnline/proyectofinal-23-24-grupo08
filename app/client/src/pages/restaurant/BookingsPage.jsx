import React from 'react';
import { useUser } from '../../hooks/useUser';
import RestaurantNavBar from '../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './bookingStyles.css';
import BookingCards from '../../components/restaurant/Bookings/BookingCards/BookingCards';
import BookingCalendar from '../../components/restaurant/Bookings/BookingCalendar/BookingCalendar';
import { useData } from '../../hooks/useData';
import { useEffect } from 'react';
import { DatePicker } from '../../components/restaurant/Bookings/BookingDatePicker/DatePicker';
import { useState } from 'react';

const BookingsPage = (props) => {
    const { restaurantId } = useUser();
    let [selectedDate, setSelectedDate] = useState(new Date());
    const { data: dataBookings, isLoading, hasError, getData: getBookings } = useData();

    useEffect(() => {
        console.log("bookings")
        getBookings(`/restaurant/${restaurantId}/bookings?date=${selectedDate}`);
    }, [selectedDate]);

    const selectedDay = (fechaOriginal) =>{

        const year = fechaOriginal.getFullYear();
        const month = fechaOriginal.getMonth() + 1; 
        const day = fechaOriginal.getDate();

        const monthString = month < 10 ? `0${month}` : `${month}`;
        const dayString = day < 10 ? `0${day}` : `${day}`;

        const fechaFormateada = `${year}-${monthString}-${dayString}`;

        setSelectedDate(fechaFormateada)
    };

    return (
        <>
            {!dataBookings ? (
                <p> Loading... </p>
            ) : (
                <>
                    <RestaurantNavBar />
                    <DatePicker getSelectedDay={selectedDay}
                                    endDate={200}
                                    selectDate={selectedDate}
                                    labelFormat={"MMMM"}
                                    color={"#2a5865"}        
                    />
                    <div className='mainBookingsContainer'>
                        <div className='bookingsPreview'>
                            <div className='activeBookings'>
                                <h2>Reservas activas</h2>
                                <div className='bookingsSections'>
                                    {dataBookings.data.map((booking, index) => {
                                        const currentTime = new Date();
                                        const bookingTime = new Date();
                                        const [hours, minutes] = booking.time.split(":");
                                        bookingTime.setHours(hours, minutes);
                                    
                                        if (bookingTime < currentTime) {
                                            return (
                                                <BookingCards
                                                    key={`booking-card-${index}`}
                                                    time={booking.time}
                                                    numberOfPeople={booking.guests}
                                                    assignedTables={[1, 2]}
                                                    reservationName={booking.name}
                                                />
                                            ); 
                                        } else {
                                            console.log(`Booking time en próximas reservas, hora actual ${currentTime} hora de la reserva ${bookingTime}`);
                                        }
                                    })}
                                </div>
                            </div>
                            <div className='upcomingBookings'>
                                <h2>Proximas reservas</h2>
                                <div className='bookingsSections'>
                                    {dataBookings.data.map((booking, index) => {
                                        const currentTime = new Date();
                                        const bookingTime = new Date();
                                        const [hours, minutes] = booking.time.split(":");
                                        bookingTime.setHours(hours, minutes);
                                    
                                        if (bookingTime > currentTime) {
                                            return (
                                                <BookingCards
                                                    key={`booking-card-${index}`}
                                                    time={booking.time}
                                                    numberOfPeople={booking.guests}
                                                    assignedTables={[1, 2]}
                                                    reservationName={booking.name}
                                                />
                                            ); 
                                        } else {
                                            console.log(`Booking time en próximas reservas, hora actual ${currentTime} hora de la reserva ${bookingTime}`);
                                        }
                                    })}
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
