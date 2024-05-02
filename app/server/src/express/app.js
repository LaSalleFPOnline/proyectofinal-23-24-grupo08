const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');
// const authRoutes = require('./routes/auth.js'); //borrar
const endpointsAuth = require('./routes/authRoutes.js');
const endpointsUser = require('./routes/userRoutes.js');
const endpointsBooking = require('./routes/bookingRoutes.js');
const endpointsRestaurant = require('./routes/restaurantRoutes.js');

const routes = {
    // basics operations
    user: require('./routes/crud'),
    restaurant: require('./routes/crud'),
    booking: require('./routes/crud'),
    extra: require('./routes/crud'),

    // auth
    userAuth: require('./routes/auth')
    // add more routes here
};

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

function makeHandlerAwareOfAsyncErrors(handler) {
    return async function (req, res, next) {
        try {
            await handler(req, res);
            console.log('-----> RES', res);
            console.log('------>REQ', req);
        } catch (error) {
            next(error);
        }
    };
}

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the API' });
});

// for (const [routeName, routeController] of Object.entries(routes)) {
//   if (routeController.getAll) {
//     app.get(
//       `/api/${routeName}`,
//       makeHandlerAwareOfAsyncErrors(routeController.getAll)
//     );
//   }

//   if (routeController.getById) {
//     app.get(
//       `/api/${routeName}/:id`,
//       makeHandlerAwareOfAsyncErrors(routeController.getById)
//     );
//   }

//   if (routeController.create) {
//     app.post(
//       `/api/${routeName}`,
//       makeHandlerAwareOfAsyncErrors(routeController.create)
//     );
//   }

//   if (routeController.update) {
//     app.put(
//       `/api/${routeName}/:id`,
//       makeHandlerAwareOfAsyncErrors(routeController.update)
//     );
//   }

//   if (routeController.remove) {
//     app.delete(
//       `/api/${routeName}/:id`,
//       makeHandlerAwareOfAsyncErrors(routeController.remove)
//     );
//   }
// }

module.exports = app;
