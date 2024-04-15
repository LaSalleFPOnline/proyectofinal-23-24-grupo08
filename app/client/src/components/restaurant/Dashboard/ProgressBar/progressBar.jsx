import React from 'react';

const ProgressBar = ({ percentage }) => {
    console.log("percentage:", percentage);

    const getColor = () => {
        const red = Math.round(255 * (1 - percentage / 100));
        const green = Math.round(255 * (percentage / 100));
        return `rgb(${red}, ${green}, 0)`;
    };

    const progressBarStyle = {
        width: `${percentage}%`,
        backgroundColor: getColor(),
    };

    return (
        <div className="progress-bar">
            <div className="progress" style={progressBarStyle}></div>
        </div>
    );
};

export default ProgressBar;
