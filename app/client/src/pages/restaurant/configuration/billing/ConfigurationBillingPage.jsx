import React from 'react';
import { useUser } from '../../../../hooks/useUser';
import RestaurantNavBar from '../../../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './configurationBillingStyles.css';
import ConfigurationNavBar from '../../../../components/restaurant/Configuration/ConfigurationNavBar/ConfigurationNavBar';
import ConfigurationPersonalData from '../../../../components/restaurant/Configuration/ConfigurationPersonalData/ConfigurationPersonalData';

const ConfigurationBillingPage = (props) => {
    const { restaurantId } = useUser();

    return (
        <>
            <RestaurantNavBar />
            <div className='configurationContainer'>
                <ConfigurationNavBar />
                <div className='configurationBody'>
                    <ConfigurationPersonalData />
                </div>
            </div>
        </>
    );
};

export default ConfigurationBillingPage;
