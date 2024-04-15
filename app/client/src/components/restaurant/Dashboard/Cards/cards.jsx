import React from 'react';
import { cardsInfo } from './cardsContent';
import './cardsStyles.css';
import ProgressBar from '../ProgressBar/progressBar';
import PercentageVariation from '../PercentageVariatio/precentageVariation';

const Cards = () => {
    return (
        <div className="cardsContainer">
            {cardsInfo.map((card, index) => (
                <div className="tarjeta" key={index}>
                    <h2>{card.title}</h2>
                    {card.type === "percentage" && <h1>{card.value}%</h1>}
                    {card.type === "fraction" && (
                        
                        <><h1>{card.value}</h1><ProgressBar percentage={parseInt(card.value.split("/")[0])} /></>
            
                    )}
                    {card.type === "number" && <h1>{card.value}</h1>}
                    {card.type === "money" && <h1>${card.value}</h1>}
                    <PercentageVariation percentage={card.precentageVariation} className="" />
                </div>
            ))}
        </div>
    );
};

export default Cards;
