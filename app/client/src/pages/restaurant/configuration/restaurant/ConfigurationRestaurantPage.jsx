import React from 'react';
import RestaurantNavBar from '../../../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './configurationRestaurantStyles.css';
import ConfigurationNavBar from '../../../../components/restaurant/Configuration/ConfigurationNavBar/ConfigurationNavBar';
import ConfigurationRestaurantForm from '../../../../components/restaurant/Configuration/ConfigurationRestaurantForm/ConfigurationRestaurantForm';

const ConfigurationRestaurantPage = (props) => {
    return (
        <>
            <RestaurantNavBar />
            <div className='configurationContainer'>
                <ConfigurationNavBar />
                <div className='configurationBody'>
                    <ConfigurationRestaurantForm />
                </div>
            </div>
        </>
    );
};

export default ConfigurationRestaurantPage;
