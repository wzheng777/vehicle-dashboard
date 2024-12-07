import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
        <img src="plug-off.png" alt="Charging Off" style={{ width: 140, height: 140 }} />
      ) : (
        <img src="plug-on.png" alt="Charging On" style={{ width: 140, height: 140 }} />
      )}
    </div>
  );
};

ChargingButton.propTypes = {
  initialChargingState: PropTypes.bool,
  onChargingToggle: PropTypes.func.isRequired,
};

export default ChargingButton;