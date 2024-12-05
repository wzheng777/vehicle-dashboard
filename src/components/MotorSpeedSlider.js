import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import './MotorSpeedSlider.css';

const MotorSpeedSlider = ({ initialSpeed, onSpeedChange, enableSlider }) => {
  const [speed, setSpeed] = useState(initialSpeed || 0);

  const marks = [
    {
      value: 0,
      label: 'OFF',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
  ];
  
  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
    onSpeedChange(newValue);
  };
  // console.log("speed: ");
  // console.log(speed);
  return (
    <div className="motor-speed-slider">
      <h3>MOTOR SPEED SETTING</h3>
      <Slider
        disabled={!enableSlider}
        value={initialSpeed}
        onChange={handleSpeedChange}
        step={1}
        marks={marks.map((mark) => ({ ...mark, label: <span style={{ color: '#e5e5e5' }}>{mark.label}</span> }))}
        min={0}
        max={4}
        valueLabelDisplay="auto"
        color="#333333"
        ColorSlider="#1a1a1a"
      />
    </div>
  );
};

MotorSpeedSlider.propTypes = {
  initialSpeed: PropTypes.number,
  onSpeedChange: PropTypes.func.isRequired,
};

export default MotorSpeedSlider;


