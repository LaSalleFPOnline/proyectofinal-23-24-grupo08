import React from 'react';
import { Button } from '../button/Button';
import { title, navigation } from './content';
import { Outlet, Link } from 'react-router-dom';
import styles from './navigation.module.css';
import { useUser } from '../../hooks/useUser';

export const Navigation = () => {
    const { isAuthenticated, firstName, lastName, restaurantName } = useUser();

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
        </nav>
    );
};
