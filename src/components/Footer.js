import React from 'react';
import PropTypes from 'prop-types';
import BottomButtons from './BottomButtons';
import MenuButton from './MenuButton';
import ChargingButton from './ChargingButton';
import './Footer.css';
import { Rowing } from '@mui/icons-material';

const Footer = ({ onGearClick, onMotorClick, onBatteryTempClick, onMenuClick, onChargingToggle, initialChargingState }) => {
  return (
    <div className="footer">
      <BottomButtons
        onGearClick={onGearClick}
        onMotorClick={onMotorClick}
        onBatteryTempClick={onBatteryTempClick}
      />
      <MenuButton onMenuClick={onMenuClick} />
      <ChargingButton initialChargingState={initialChargingState} onChargingToggle={onChargingToggle} />
    </div>
  );
};

Footer.propTypes = {
  onGearClick: PropTypes.func.isRequired,
  onMotorClick: PropTypes.func.isRequired,
  onBatteryTempClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onChargingToggle: PropTypes.func.isRequired,
  initialChargingState: PropTypes.bool.isRequired,
};

export default Footer;


