import { Route, Routes } from 'react-router-dom';
import RestaurantProtectionRoute from './RestaurantProtectionRoute';
import AdminProtectionRoute from './AdminProtectionRoute';
import { getRoutePaths } from './routeResolver';
import Page from '../pages/Page';
import { Page404 } from '../pages/Page404';
import LandingLayout from '../layouts/LandingLayout';
import RestaurantLayout from '../layouts/RestaurantLayout';
import AdminLayout from '../layouts/AdminLayout';

const getRestaurantRoutes = () => {
    const routePaths = getRoutePaths('restaurant');
    return routePaths.map(({ path, page }, key) => (
        <Route
            exact
            path={path}
            element={
                <RestaurantProtectionRoute>
                    <RestaurantLayout>
                        <Page page={page} />
                    </RestaurantLayout>
                </RestaurantProtectionRoute>
            }
            key={`routes-restaurant-${key}`}
        />
    ));
};

const getAdminRoutes = () => {
    const routePaths = getRoutePaths('admin');
    return routePaths.map(({ path, page }, key) => (
        <Route
            exact
            path={path}
            element={
                <AdminProtectionRoute>
                    <AdminLayout>
                        <Page page={page} />
                    </AdminLayout>
                </AdminProtectionRoute>
            }
            key={`routes-admin-${key}`}
        />
    ));
};

const getPublicRoutes = () => {
    const routePaths = getRoutePaths('public');
    return routePaths.map(({ path, page }, key) => (
        <Route
            exact
            path={path}
            element={
                <LandingLayout>
                    <Page page={page} />
                </LandingLayout>
            }
            key={`routes-public-${key}`}
        />
    ));
};

const getAuthRoutes = () => {
    const routePaths = getRoutePaths('auth');
    return routePaths.map(({ path, page }, key) => (
        <Route exact path={path} element={<Page page={page} />} key={`routes-auth-${key}`} />
    ));
};

export const AppRouter = ({ children }) => {
    return (
        <>
            <Routes>
                {getAuthRoutes()}
                {getPublicRoutes()}
                {getAdminRoutes()}
                {getRestaurantRoutes()}
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    );
};

export default AppRouter;
