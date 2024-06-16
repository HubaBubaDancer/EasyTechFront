import React from 'react';
import './InfoBoxes.css';

const InfoBoxes = ({ data }) => {
    return (
        <div className="info-boxes-container">
            {data.map((item, index) => (
                <div key={index} className="info-box">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoBoxes;
