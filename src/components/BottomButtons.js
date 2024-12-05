import React from 'react';
import PropTypes from 'prop-types';
import './BottomButtons.css';



import SettingsIcon from '@mui/icons-material/Settings';

const BottomButtons = ({ onGearClick, onMotorClick, onBatteryTempClick }) => {
  return (
    <div className="bottom-buttons">
      <div className="button" id="gear-info" onClick={onGearClick}>
      </div>
      <div className="button" id="engine-info" onClick={onMotorClick}>
        
      </div>
      <div className="button" id="battery-info" onClick={onBatteryTempClick}>
       
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


