import React from 'react';
import PropTypes from 'prop-types';
import InfoDisplay from './InfoDisplay';
import MotorSpeedSlider from './MotorSpeedSlider';
import './MidRow.css';

const MidRow = ({ batteryPercentage, batteryTemperature, gearRatio, motorRPM, initialSpeed, onSpeedChange , enableSlider}) => {
  return (
    <div className="mid-row">
      <InfoDisplay
        batteryPercentage={batteryPercentage}
        batteryTemperature={batteryTemperature}
        gearRatio={gearRatio}
        motorRPM={motorRPM}
      />
      <MotorSpeedSlider initialSpeed={initialSpeed} onSpeedChange={onSpeedChange} enableSlider = {enableSlider}/>
    </div>
  );
};

MidRow.propTypes = {
  batteryPercentage: PropTypes.number.isRequired,
  batteryTemperature: PropTypes.number.isRequired,
  gearRatio: PropTypes.number.isRequired,
  initialSpeed: PropTypes.number.isRequired,
  onSpeedChange: PropTypes.func.isRequired,
};

export default MidRow;


