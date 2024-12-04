import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import './MotorSpeedSlider.css';

const MotorSpeedSlider = ({ initialSpeed, onSpeedChange, enableSlider }) => {
  const [speed, setSpeed] = useState(initialSpeed || 0);

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
    onSpeedChange(newValue);
  };
  // console.log("speed: ");
  // console.log(speed);
  return (
    <div className="motor-speed-slider">
      <h3>Motor Speed Setting</h3>
      <Slider
        disabled={!enableSlider}
        value={speed}
        onChange={handleSpeedChange}
        step={1}
        marks
        min={0}
        max={4}
        valueLabelDisplay="auto"
      />
      <p>Current Motor Speed: {speed}</p>
    </div>
  );
};

MotorSpeedSlider.propTypes = {
  initialSpeed: PropTypes.number,
  onSpeedChange: PropTypes.func.isRequired,
};

export default MotorSpeedSlider;


