import React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import './MotorRPMGauge.css';

const MotorRPMGauge = ({ rpmValue }) => {
  // Create a spring-based animation for the gauge needle
  const { rotation } = useSpring({
    from: { rotation: 0 },
    to: { rotation: rpmValue * 0.09 - 90 }, // Assuming rpmValue ranges from 0 to 3000
    config: { tension: 180, friction: 12 },
  });

  return (
    <div className="motor-rpm-gauge">
      <div className="gauge">
        <div className="gauge-background">
          <animated.div
            className="gauge-needle"
            style={{
              transform: rotation.to((r) => `rotate(${r}deg)`),
            }}
          />
        </div>
      </div>
      <p>Motor RPM: {rpmValue}</p>
    </div>
  );
};

MotorRPMGauge.propTypes = {
  rpmValue: PropTypes.number.isRequired,
};

export default MotorRPMGauge;


