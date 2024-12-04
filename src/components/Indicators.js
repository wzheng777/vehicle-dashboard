import React from 'react';
import PropTypes from 'prop-types';
import './Indicators.css'; // Import CSS for styling the indicators

const Indicators = ({ indicators }) => (
  <div className="indicators">
    {indicators.parkingBrake && (
      <div className="indicator" id="parking">
      </div>
    )}
    {indicators.checkEngine && (
      <div className="indicator" id="check-engine">
      </div>
    )}
    {indicators.motorStatus && (
      <div className="indicator" id="motor-status">
      </div>
    )}
    {indicators.batteryLow && (
      <div className="indicator" id="battery-low">
      </div>
    )}
  </div>
);

Indicators.propTypes = {
  indicators: PropTypes.shape({
    parkingBrake: PropTypes.bool,
    checkEngine: PropTypes.bool,
    batteryLow: PropTypes.bool,
    motorStatus: PropTypes.bool,
  }).isRequired,
};

export default Indicators;
