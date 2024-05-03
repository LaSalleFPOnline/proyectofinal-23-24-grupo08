import React from 'react';
import styles from './aboutApp.module.css';
import { steps } from './content';

const AboutApp = () => {
    return (
        <>
            {steps.map((element, index) => {
                return (
                    <div key={index} className={styles.stepContainer}>
                        <div className={styles.leftImageContainer}>
                            <div className={styles.circle}>{index+1}</div>
                        </div>
                        <div className={styles.infoContainer}>
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default AboutApp;
