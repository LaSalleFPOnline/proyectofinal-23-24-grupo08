import React from 'react';
import { title, navigation } from './content';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import styles from './navigation.module.css';

const Title = (props) => {
    const { isAuthenticated, restaurantName, isRestaurant, isAdmin, layout } = props;
    return (
        <div className={styles.innerContainer}>
            <span className={styles.title}>{title}</span>
            {layout === 'restaurant' && isAuthenticated && isRestaurant && (
                <span className={styles.subtitle}>AREA {restaurantName}</span>
            )}
            {layout === 'admin' && isAuthenticated && isAdmin && <span className={styles.subtitle}>AREA DE ADMINISTRACIÓN</span>}
        </div>
    );
};

export const Navigation = (props) => {
    const { layout } = props;
    const { isAuthenticated, firstName, restaurantName, isRestaurant, slug, isAdmin, signOut } = useUser();
    console.log('NAVIGATION!! >> ', restaurantName);
    return (
        <nav className={styles.navBar}>
            <Title
                isAuthenticated={isAuthenticated}
                restaurantName={restaurantName}
                isAdmin={isAdmin}
                isRestaurant={isRestaurant}
                layout={layout}
            />

            <div className={styles.navButtons}>
                {navigation.map((element, index) => (
                    <Link to={`/${element.href}`} key={`navigation-main-${index}`}>
                        {element.name}
                    </Link>
                ))}
            </div>
            <div className={styles.user}>
                {isAuthenticated ? (
                    <>
                        <p className={styles.hello}>Hola {`${firstName}`}</p>
                        <div className={styles.logged}>
                            {isAuthenticated && isRestaurant && layout !== 'restaurant' && (
                                <Link to={`/${slug}`}>
                                    <button className={styles.mainButton}>Area cliente</button>
                                </Link>
                            )}
                            <button onClick={signOut}>Logout</button>
                        </div>
                    </>
                ) : (
                    <Link to='/login'>
                        <button>Acceder</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};
