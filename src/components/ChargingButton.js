import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import './ChargingButton.css';

const ChargingButton = ({ initialChargingState, onChargingToggle }) => {
  const [isCharging, setIsCharging] = useState(initialChargingState || false);

  const handleChargingClick = () => {
    const newChargingState = !isCharging;
    setIsCharging(newChargingState);
    onChargingToggle(newChargingState);
  };

  return (
    <div className="charging-button" onClick={handleChargingClick}>
      {isCharging ? (
        <BatteryChargingFullIcon style={{ fontSize: 40, color: 'green' }} />
      ) : (
        <PowerOffIcon style={{ fontSize: 40, color: 'red' }} />
      )}
      <p>{isCharging ? 'Stop Charging' : 'Start Charging'}</p>
    </div>
  );
};

ChargingButton.propTypes = {
  initialChargingState: PropTypes.bool,
  onChargingToggle: PropTypes.func.isRequired,
};

export default ChargingButton;


