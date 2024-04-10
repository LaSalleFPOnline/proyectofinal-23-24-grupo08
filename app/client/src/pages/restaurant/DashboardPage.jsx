import React from 'react';
import { useUser } from '../../hooks/useUser';
import RestaurantNavBar from '../../components/restaurant/RestaurantNavBar/restaurantNavBar';
import Cards from '../../components/restaurant/Dashboard/Cards/cards';
import './dashboardStyles.css' ;

const DashboardPage = (props) => {
    const { idRestaurant } = props;
    const { name } = useUser();

    return (
        <>
            <RestaurantNavBar/>

            
            <div className="dashboardContainer">

                <h4>Estadisticas de rendimiento</h4>
                <Cards/>
               
                
            </div>
        </>
        
    );
};

export default DashboardPage;
