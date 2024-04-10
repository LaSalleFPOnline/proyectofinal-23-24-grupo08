import React from 'react';
import './percentageVariation.css';

const PercentageVariation = ({ percentage }) => {
    const calculateColor = (backgroundColor) => {
        let red, green, blue, opacity;
    
        if (percentage < 0) {
            red = 255;
            green = 0;
            blue = 0;
            opacity = backgroundColor ? 0.1 : 1; 
        } else if (percentage == 0){
            red = 128;
            green = 128;
            blue = 128;
            opacity = backgroundColor ? 0.1 : 1; 
        
        } else if (percentage < 1) {
            red = 128;
            green = 128;
            blue = 128;
            opacity = 1;
        } else if (percentage <= 100) {
            red = 255 * (1 - (percentage / 100));
            green = 128 + (127 * (percentage / 100));
            blue = 0;
            opacity = backgroundColor ? 0.1 : 1; 
        } else {
            red = 0;
            green = 255;
            blue = 0;
            opacity = backgroundColor ? 0.1 : 1;
        }
    
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    };
    
    

    const color = calculateColor();
    const backgroundColor = calculateColor(true);

    return (
        <div className='percentageBox' style={{ backgroundColor: backgroundColor, color: color }}>
            {percentage}%
        </div>
    );
};

export default PercentageVariation;