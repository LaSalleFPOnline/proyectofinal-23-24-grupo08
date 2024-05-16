const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');
const endpointsAuth = require('./routes/authRoutes.js');
const endpointsUser = require('./routes/userRoutes.js');
const endpointsBooking = require('./routes/bookingRoutes.js');
const endpointsRestaurant = require('./routes/restaurantRoutes.js');

const app = express();

for (const controllerName in controllers) {
    const controller = controllers[controllerName];
    controller.setControllers(controllers);
}

app.use(cors());
app.use(express.json());

app.use('/api', endpointsAuth);
app.use('/api/user', endpointsUser);
app.use('/api/booking', endpointsBooking);
app.use('/api/restaurant', endpointsRestaurant);

module.exports = app;
