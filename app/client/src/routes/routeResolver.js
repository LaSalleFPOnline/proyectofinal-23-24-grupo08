import { capitalizeFirstLetter, getSlug } from '../helpers';
import __isUndefined from 'lodash/isUndefined';

const _routeRestaurantPaths = {
    dashboard: '/:idRestaurant',
    bookings: '/:idRestaurant/reservas',
    editBooking: '/:idRestaurant/:idBooking/editar',
    configuration: '/:idRestaurant/configuracion'
};

const _routeAdminPaths = {
    adminDashboard: '/admin',
    adminClients: '/admin/clientes',
    adminBookings: '/admin/reservas',
    adminBookingRestaurant: '/admin/reservas/:idRestaurant',
    adminBilling: '/admin/facturacio',
    adminConfiguration: '/admin/configuracion'
};

const _routePublicPaths = {
    landing: '/',
    pricing: '/precios',
    work: '/como-funciona',
    hire: '/contratar'
};

const _routeAuthPaths = {
    login: '/login'
};

const getRoutePathsByType = (type) => {
    switch (type) {
        case 'admin':
            return _routeAdminPaths;
        case 'restaurant':
            return _routeRestaurantPaths;
        case 'auth':
            return _routeAuthPaths;
        case 'public':
            return _routePublicPaths;
    }
};

const getRoutePaths = (type) => {
    const routes = [];

    const routePaths = getRoutePathsByType(type);

    Object.entries(routePaths).some(([routeKey, route]) => {
        const routePath = {};
        routePath['path'] = route;
        routePath['page'] = `${capitalizeFirstLetter(routeKey)}Page`;
        routes.push(routePath);
    });

    return routes;
};

export { getRoutePaths };
