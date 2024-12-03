import React from 'react';
import { LocalParking, Warning, BatteryAlert, Speed } from '@mui/icons-material'; // Material UI icons
import PropTypes from 'prop-types';
import './Indicators.css'; // Import CSS for styling the indicators

const Indicators = ({ indicators }) => (
  <div className="indicators">
    {indicators.parkingBrake && (
      <div className="indicator">
        <LocalParking style={{ color: 'red' }} />
        {/* <span>Parking Brake Engaged</span> */}
      </div>
    )}
    {indicators.checkEngine && (
      <div className="indicator">
        <Warning style={{ color: 'yellow' }} />
        {/* <span>Check Engine</span> */}
      </div>
    )}
    {indicators.batteryLow && (
      <div className="indicator">
        <BatteryAlert style={{ color: 'orange' }} />
        {/* <span>Battery Low</span> */}
      </div>
    )}
    {indicators.motorStatus && (
      <div className="indicator">
        <Speed style={{ color: 'green' }} />
        {/* <span>Motor Running High</span> */}
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


