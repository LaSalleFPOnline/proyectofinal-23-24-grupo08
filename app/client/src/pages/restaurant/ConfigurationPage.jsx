import React from 'react';
import { useUser } from '../../hooks/useUser';
import RestaurantNavBar from '../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import './configurationStyles.css'
import ConfigurationNavBar from '../../components/restaurant/Configuration/ConfigurationNavBar/ConfigurationNavBar';
import ConfigurationPersonalData from '../../components/restaurant/Configuration/ConfigurationPersonalData/ConfigurationPersonalData';


const ConfigurationPage = (props) => {
    const { idRestaurant } = props;
    const { name } = useUser();
    console.log('*** ConfigurationPage -> ', { name, idRestaurant });

    const handleButtonClick = (key) => {
        console.log("Botón clicado:", key);
    };

    return (
        <>
            <RestaurantNavBar/>

            <div className="configurationContainer">
            <ConfigurationNavBar onButtonClick={handleButtonClick}/>
                <div className="configurationBody">
                    <ConfigurationPersonalData/>
                </div>
            </div>
            
        </>
    );
};

export default ConfigurationPage;
