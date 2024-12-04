import React from 'react';
import PropTypes from 'prop-types';
import './InfoDisplay.css';


const InfoDisplay = ({ batteryPercentage, batteryTemperature, gearRatio, motorRPM }) => {
  return (

    <div className="info-display">
      <div className="info-item" id="gear-ratio">
        <div className='info-value'>{gearRatio}</div>
      </div>
      <div className="info-item" id="battery-percentage">
        <div className='info-value'>{batteryPercentage}%</div>
      </div>
      <div className="info-item" id="battery-temperature">
        <div className='info-value'>{batteryTemperature}°C</div>
      </div>
      <div className="info-item" id="motor-rpm">
        <div className='info-value'>{motorRPM}</div>
      </div>
    </div>

  );
};

InfoDisplay.propTypes = {
  batteryPercentage: PropTypes.number.isRequired,
  batteryTemperature: PropTypes.number.isRequired,
  gearRatio: PropTypes.number.isRequired,
};

export default InfoDisplay;


