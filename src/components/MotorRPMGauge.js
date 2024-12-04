import React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import './MotorRPMGauge.css';

const MotorRPMGauge = ({ rpmValue }) => {
  // Create a spring-based animation for the gauge needlek

  
  const { rotation } = useSpring({
    from: { rotation:  0 },
    to: { rotation: rpmValue * 0.36 + 36 }, // Assuming rpmValue ranges from 0 to 800
    config: { tension: 180, friction: 12 },
  });

  return (
    <div className="motor-rpm-gauge">
      <div className="gauge">
        <div className="gauge-background-rpm">
          <animated.div
            className="gauge-needle"
            style={{
              transform: rotation.to((r) => `rotate(${r}deg)`),
            }}
          />
          <div className="rpm-value">
          <div>{rpmValue}</div>
          <div className='rpm-unit'> RPM </div>
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

MotorRPMGauge.propTypes = {
  rpmValue: PropTypes.number.isRequired,
};

export default MotorRPMGauge;


