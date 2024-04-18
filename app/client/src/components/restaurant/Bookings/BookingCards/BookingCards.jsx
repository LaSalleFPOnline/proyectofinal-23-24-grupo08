import React from 'react';
import './bookingCardsStyles.css';

const BookingCards = ({ time, numberOfPeople, assignedTables, reservationName, width, left }) => {
    const containerStyle = {
        minWidth: width ? `${width}px` : 'auto',
        position: left ? 'relative' : 'relative',
        left: left ? `${left}px` : 'auto'
    };

    return (
        <div className='bookingCardContainer' style={containerStyle}>
            <div className="bookingHeader">
                <div className='textWithIconsBooking'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                    <p>{time}</p>
                </div>
                <div className='textWithIconsBooking'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                    <p>{numberOfPeople}</p>
                </div>
            </div>
            <div className="bookingName">
                <h2>{reservationName}</h2>
            </div>
            
            <div className="assignedTables">
                {assignedTables.length > 1 ? (
                    <p>Tables {assignedTables.join(', ')}</p>
                ) : (
                    <p>Table {assignedTables.join(', ')}</p>
                )}
            </div>
        </div>
    );
};

export default BookingCards;
