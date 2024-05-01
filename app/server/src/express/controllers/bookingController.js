const sequelize = require('../../sequelize');
const { booking: Booking } = sequelize.models;
let controllers = null;

const bookingController = {
    setControllers: (ctrls) => {
        controllers = ctrls;
    },
    getByRestaurant: async (idRestaurant) => {
        try {
            const bookings = await Booking.findAll({
                where: {
                    idRestaurant
                }
            });
            if (!bookings) return [];
            return bookings;
        } catch (error) {
            return [];
        }
    },
    getRestaurantBookingsByHour: async (idRestaurant, date, time) => {
        try {
            const bookings = await Booking.findAll({
                where: {
                    idRestaurant,
                    date,
                    time
                }
            });
            console.log('getRestaurantBookingsByHour >> ', { bookings, date, time });
            if (!bookings) return [];

            return bookings;
        } catch (error) {
            return [];
        }
    },
    getAll: async (req, res) => {
        try {
            const bookings = await Booking.findAll();
            res.json({
                status: 'OK',
                data: bookings
            });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al obtener los bookings' });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const booking = await Booking.findByPk(id);
            if (!booking) {
                return res.status(404).json({ status: 'KO', message: 'Booking no encontrado' });
            }
            res.json(booking);
        } catch (error) {
            console.error('Error al obtener el booking por ID:', error);
            res.status(500).json({ status: 'KO', message: 'Error al obtener el booking por ID' });
        }
    },

    create: async (req, res) => {
        const { idRestaurant, date, time, guests, comments, name, email, phone } = req.body;
        const { restaurantController } = controllers;
        const capacity = await restaurantController.getCapacity(idRestaurant);
        console.log('CRETE BOOKING > RESTAURANT CAPACITY ', capacity);

        try {
            const newBooking = await Booking.create({ idRestaurant, date, time, guests, comments, name, email, phone });
            res.status(201).json({
                status: 'OK',
                data: newBooking
            });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al crear un nuevo booking', error });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { idRestaurant, date, time, guests, comments, name, email, phone, status } = req.body;
        try {
            const [updated] = await Booking.update(
                { idRestaurant, date, time, guests, comments, name, email, phone, status },
                { where: { id } }
            );
            if (!updated) {
                return res.status(404).json({ status: 'KO', message: 'Booking no encontrado' });
            }
            res.json({ message: 'Booking actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al actualizar el booking' });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Booking.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ status: 'KO', message: 'Booking no encontrado' });
            }
            res.json({ message: 'Booking eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al eliminar el booking' });
        }
    }
};

module.exports = bookingController;
