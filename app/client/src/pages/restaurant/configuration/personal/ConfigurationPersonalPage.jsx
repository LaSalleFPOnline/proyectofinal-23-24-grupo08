import React from 'react';
import { useUser } from '../../../../hooks/useUser';
import RestaurantNavBar from '../../../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './configurationPersonalStyles.css';
import ConfigurationNavBar from '../../../../components/restaurant/Configuration/ConfigurationNavBar/ConfigurationNavBar';
import ConfigurationPersonalData from '../../../../components/restaurant/Configuration/ConfigurationPersonalData/ConfigurationPersonalData';
import { useNavigate } from 'react-router-dom';

const ConfigurationPersonalPage = (props) => {
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

export default ConfigurationPersonalPage;
