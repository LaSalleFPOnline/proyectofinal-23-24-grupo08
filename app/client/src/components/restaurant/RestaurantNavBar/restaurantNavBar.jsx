import React from 'react';
import './restaurantNavBar.css';
import { sideNavItems } from './content';
import { useUser } from "../../../hooks/useUser";

const RestaurantNavBar = () => {

    const { username } = useUser();

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
                         <a href={new URL(username + item.href, window.location.origin).pathname}>
                            <button key={index}>
                                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                <span>{item.text}</span>
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RestaurantNavBar;