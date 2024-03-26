import { restaurantPages } from './restaurant';
import { landingPages } from './landing';
import { adminPages } from './admin';
import { authPages } from './auth';

export const pages = {
    ...restaurantPages,
    ...landingPages,
    ...adminPages,
    ...authPages
};
