import React, { useState } from 'react';
import './configurationNavBarStyles.css';
import content from './content';

const ConfigurationNavBar = ({ onButtonClick }) => {
    const handleButtonClick = (key) => {
        onButtonClick(key);
    };

    return (
        <div className="configurationNavBar">
            {Object.keys(content).map((key) => (
                <div className="configurationOptions" key={key}>
                    <button onClick={() => handleButtonClick(content[key].component)}>
                        <span dangerouslySetInnerHTML={{ __html: content[key].icon }} />
                        {content[key].text}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ConfigurationNavBar;
