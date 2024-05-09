import React from 'react';
import { Link } from 'react-router-dom';
import './restaurantNavBar.css';
import { sideNavItems } from './content';
import { useUser } from '../../../hooks/useUser';

const RestaurantNavBar = () => {
    const { slug } = useUser();

    return (
        <>
            <div className='contenedor'>
                <div className='inner-container'>
                    <span className='title'>DGUSTA</span>
                    <span className='subtitle'>AREA DE CLIENTE</span>
                </div>
            </div>
            <div className='secondContainer'>
                <div className='buttonsContainer'>
                    {sideNavItems.map((item, index) => (
                        <Link to={`/${slug}${item.href}`}>
                            <button key={`restaurant-navbar-${index}`}>
                                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                <span>{item.text}</span>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RestaurantNavBar;
