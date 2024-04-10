import React from 'react';
import './restaurantNavBar.css';
import { sideNavItems } from './content';

const RestaurantNavBar = () => {
    return (
        <>
            <div className="contenedor">
                <div className="inner-container">
                    <span className="title">DGUSTA</span>
                    <span className="subtitle">AREA DE CLIENTE</span>
                </div>
            </div>
            <div className="secondContainer">
                <div className="buttonsContainer">
                    {sideNavItems.map((item, index) => (
                        <button key={index}>
                            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                            <span>{item.text}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RestaurantNavBar;