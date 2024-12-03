import React from 'react';
import PropTypes from 'prop-types';
import InfoDisplay from './InfoDisplay';
import MotorSpeedSlider from './MotorSpeedSlider';
import './MidRow.css';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SettingsIcon from '@mui/icons-material/Settings';

const MidRow = ({ batteryPercentage, batteryTemperature, gearRatio, motorRPM }) => {
  return (

    <div className="info-display">
      <div className="info-item">
          <SettingsIcon style={{ fontSize: 40 }} />
          <p>{gearRatio}</p>
        </div>
        <div className="info-item">
          <BatteryChargingFullIcon style={{ fontSize: 40 }} />
          <p>{batteryPercentage}%</p>
        </div>
        <div className="info-item">
          <ThermostatIcon style={{ fontSize: 40 }} />
          <p>{batteryTemperature}°C</p>
        </div>
        <div className="info-item">
          <ThermostatIcon style={{ fontSize: 40 }} />
          <p>{motorRPM}</p>
        </div>
    </div>

  );
};

MidRow.propTypes = {
  batteryPercentage: PropTypes.number.isRequired,
  batteryTemperature: PropTypes.number.isRequired,
  gearRatio: PropTypes.number.isRequired,
};

export default MidRow;


