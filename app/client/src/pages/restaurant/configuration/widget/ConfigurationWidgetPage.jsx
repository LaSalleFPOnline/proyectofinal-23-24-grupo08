import React from 'react';
import { useUser } from '../../../../hooks/useUser';
import RestaurantNavBar from '../../../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import ConfigurationNavBar from '../../../../components/restaurant/Configuration/ConfigurationNavBar/ConfigurationNavBar';
import ConfigurationWidget from '../../../../components/restaurant/Configuration/ConfigurationWidget/ConfigurationWidget';
import './configurationWidgetStyles.css';

const ConfigurationWidgetPage = (props) => {
    return (
        <>
            <RestaurantNavBar />

            <div className='configurationContainer'>
                <ConfigurationNavBar />
                <div className='configurationBody'>
                    <ConfigurationWidget />
                </div>
            </div>
        </>
    );
};

export default ConfigurationWidgetPage;
