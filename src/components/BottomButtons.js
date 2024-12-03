import React from 'react';
import PropTypes from 'prop-types';

import MenuButton from './MenuButton';
import ChargingButton from './ChargingButton';
import './Footer.css';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import ThermostatIcon from '@mui/icons-material/Thermostat';

import SpeedIcon from '@mui/icons-material/Speed';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';


import SettingsIcon from '@mui/icons-material/Settings';

const BottomButtons = ({ onGearClick, onMotorClick, onBatteryTempClick }) => {
  return (
    <div className="bottom-buttons">
      <div className="button" onClick={onGearClick}>
        <SettingsIcon style={{ fontSize: 40 }} />
        <p>Gear Info</p>
      </div>
      <div className="button" onClick={onMotorClick}>
        <SpeedIcon style={{ fontSize: 40 }} />
        <p>Motor Info</p>
      </div>
      <div className="button" onClick={onBatteryTempClick}>
        <BatteryAlertIcon style={{ fontSize: 40 }} />
        <p>Battery Temp</p>
      </div>
    </div>
  );
};

BottomButtons.propTypes = {
  onGearClick: PropTypes.func.isRequired,
  onMotorClick: PropTypes.func.isRequired,
  onBatteryTempClick: PropTypes.func.isRequired,
};

export default BottomButtons;


