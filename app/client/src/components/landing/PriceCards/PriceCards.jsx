import React from 'react';
import styles from './priceCards.module.css'
import {priceCardsInfo} from './content';

const PriceCards = ({onClick}) => {
    return (
        
        priceCardsInfo.map( (element, index) => {
            return(
                <div id={index} className={styles.priceCards} style={{ borderTop: `20px solid ${element.colorCode}` }}>
                    <img src={element.src} alt="" />
                    <h3>{element.title}</h3>
                    <p className={styles.description}>{element.description}</p>
                    <p className={styles.price}>{element.price}</p>
                    <button className={styles.buyButton} style={{ backgroundColor: `${element.colorCode}` }} onClick={() => onClick(index)}>BUY NOW</button>
                </div>
            )
        })

    );
};

export default PriceCards;