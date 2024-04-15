import React from 'react';
import './bookingCalendarStyles.css';

const BookingCalendar = () => {
    // Generar las filas de 30 minutos desde las 12 del mediodía hasta las 23 de la noche
    const generateRows = () => {
        const rows = [];
        const startTime = 12 * 60; // 12:00 PM en minutos
        const endTime = 23 * 60; // 11:00 PM en minutos
        const interval = 30; // Intervalo de 30 minutos

        for (let time = startTime; time <= endTime; time += interval) {
            const hour = Math.floor(time / 60);
            const minute = time % 60;
            const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

            rows.push(
                <tr key={time}>
                    <td>{formattedTime}</td>
                    {/* Aquí puedes agregar las columnas para las mesas */}
                </tr>
            );
        }

        return rows;
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Mesa 1</th>
                    <th>Mesa 2</th>
                    <th>Mesa 3</th>
                    <th>Mesa 4</th>
                    <th>Mesa 5</th>
                    <th>Mesa 6</th>
                    <th>Mesa 7</th>
                    <th>Mesa 8</th>
                    <th>Mesa 9</th>
                </tr>
            </thead>
            <tbody>
                {generateRows()}
            </tbody>
        </table>
    );
};

export default BookingCalendar;