import React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import './MotorRPMGauge.css';

const MotorRPMGauge = ({ rpmValue }) => {
  // Create a spring-based animation for the gauge needlek
  console.log(rpmValue);
  
  const { rotation } = useSpring({
    from: { rotation:  0 },
    to: { rotation: rpmValue * 0.32 + 45 }, // Assuming rpmValue ranges from 0 to 800
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
          <div className="rpm-value">
          <p>{rpmValue}</p>
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


