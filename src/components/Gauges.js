import React from 'react';
import PowerGauge from './PowerGauge';
import MotorRPMGauge from './MotorRPMGauge';
import PropTypes from 'prop-types';
import './Gauges.css';

const Gauges = ({ powerValue, motorRPM }) => {
  return (
    <div className="gauges">
      <div className="gauge-container">
        <h3>Power Gauge</h3>
        <PowerGauge powerValue={powerValue} />
      </div>
      <div className="gauge-container">
        <h3>Motor RPM Gauge</h3>
        <MotorRPMGauge rpmValue={motorRPM} />
      </div>
    </div>
  );
};

Gauges.propTypes = {
  powerValue: PropTypes.number.isRequired,
  motorRPM: PropTypes.number.isRequired,
};

export default Gauges;