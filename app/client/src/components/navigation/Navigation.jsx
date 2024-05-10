import React, { useState } from 'react';
import { Button } from '../button/Button';
import { title, navigation } from './content';
import { Outlet, Link } from 'react-router-dom';
import styles from './navigation.module.css';
import { useUser } from '../../hooks/useUser';


export const Navigation = () => {

    const [toggleDDMenu, setToggleDDMenu] = useState(false);
    const { isAuthenticated, firstName, lastName, restaurantName } = useUser();

    const toggleDropDownMenu = () => setToggleDDMenu(!toggleDDMenu);

    return (
        <nav className={styles.navBar}>
            <span>{title}</span>

            <div className={styles.navButtons}>
                {navigation.map((element, index) => (
                    <a key={index} href={element.href} type='button'>
                        {element.name}
                    </a>
                ))}
                {isAuthenticated ? (
                    <p>Hola {`${firstName} ${lastName}`}</p>
                ) : (
                    <Link to='/login'>
                        <button>Acceder</button>
                    </Link>
                )}
            </div>
            <div className={styles.dropDownMenuButton}>
                <button onClick={toggleDropDownMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="42px" height="42px">
                        <g fill="#ffffff" fillRule="nonzero">
                        <g transform="scale(5.12,5.12)">
                            <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                        </g>
                        </g>
                    </svg>
                </button>
            </div>
            <div className={`${styles.dropDownMenu} ${toggleDDMenu ? styles.visible : ''}`}> 
                {navigation.map((element, index) => (
                    <a key={index} href={element.href} type='button'>
                        {element.name}
                    </a>
                ))}
                {isAuthenticated ? (
                    <p>Hola {`${firstName} ${lastName}`}</p>
                ) : (
                    <Link to='/login'>
                        <button>Acceder</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};
