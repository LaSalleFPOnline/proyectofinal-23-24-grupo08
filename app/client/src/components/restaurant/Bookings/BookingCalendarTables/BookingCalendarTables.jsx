import React from 'react';
import './bookingCalendarTablesStyles.css';

function BookingCalendarTables(props) {
    return (
        <div className='bookingCalendarTable'>
            <p>{props.mesa}</p>
        </div>
    );
}

export default BookingCalendarTables;
