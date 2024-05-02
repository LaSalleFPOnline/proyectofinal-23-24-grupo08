const sequelize = require('../../sequelize');
const { restaurant: Restaurant } = sequelize.models;
let controllers = null;

const restaurantController = {
    setControllers: (ctrls) => {
        controllers = ctrls;
    },
    getCapacity: async (id) => {
        try {
            const restaurant = await Restaurant.findByPk(id);
            const { capacity } = restaurant;
            return capacity;
        } catch (error) {
            return false;
        }
    },

    getAll: async (req, res) => {
        try {
            const restaurants = await Restaurant.findAll();
            res.json({
                status: 'OK',
                data: restaurants
            });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al obtener los Restaurant' });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const restaurant = await Restaurant.findByPk(id);
            if (!restaurant) {
                return res.status(404).json({ status: 'KO', message: 'Restaurant no encontrado' });
            }
            res.json({
                status: 'OK',
                data: restaurant
            });
        } catch (error) {
            console.error('Error al obtener el booking por ID:', error);
            res.status(500).json({ status: 'KO', message: 'Error al obtener el Restaurant por ID' });
        }
    },

    getRestaurantBookings: async (req, res) => {
        const { id } = req.params;
        const { date, time } = req.query;
        const { bookingController } = controllers;
        try {
            const bookings =
                date && time
                    ? await bookingController.getRestaurantBookingsByHour(id, date, `${time}:00`)
                    : await bookingController.getByRestaurant(id);
            res.json({
                status: 'OK',
                data: bookings
            });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al obtener las bookings del restaurante' });
        }
    },

    create: async (req, res) => {
        const { idRestaurant, date, time, guests, comments, name, email, phone } = req.body;
        try {
            const newBooking = await Restaurant.create({ idRestaurant, date, time, guests, comments, name, email, phone });
            res.status(201).json({
                status: 'OK',
                data: newBooking
            });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al crear un nuevo booking', error });
        }
    },
    createFromRegister: async (params) => {
        const { userId, name, slug } = params;
        try {
            const newRestaurant = await Restaurant.create({ userId, name, slug });
            return newRestaurant;
        } catch (error) {
            console.log('ERROR CREATE FROM REGISTER RESTAURANTB >> ', error);
            return false;
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { idRestaurant, date, time, guests, comments, name, email, phone, status } = req.body;
        try {
            const [updated] = await restaurant.update(
                { idRestaurant, date, time, guests, comments, name, email, phone, status },
                { where: { id } }
            );
            if (!updated) {
                return res.status(404).json({ status: 'KO', message: 'Restaurant no encontrado' });
            }
            res.json({ status: 'OK', message: 'Restaurant actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al actualizar el boRestaurantoking' });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Restaurant.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ status: 'KO', message: 'Restaurant no encontrado' });
            }
            res.json({ status: 'OK', message: 'Restaurant eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ status: 'KO', message: 'Error al eliminar el Restaurant' });
        }
    }
};

module.exports = restaurantController;
