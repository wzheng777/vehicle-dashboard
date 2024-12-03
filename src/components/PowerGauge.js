import React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import './PowerGauge.css';

const PowerGauge = ({ powerValue }) => {
  // Create a spring-based animation for the gauge needle
  const { rotation } = useSpring({
    from: { rotation: 0 },
    to: { rotation: powerValue * 1.8 - 90 }, // Assuming powerValue ranges from 0 to 100
    config: { tension: 180, friction: 12 },
  });

  return (
    <div className="power-gauge">
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
      <p>Power Consumption: {powerValue}%</p>
    </div>
  );
};

PowerGauge.propTypes = {
  powerValue: PropTypes.number.isRequired,
};

export default PowerGauge;


