import React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import './PowerGauge.css';

const PowerGauge = ({ powerValue }) => {
  // Create a spring-based animation for the gauge needle
  //console.log(powerValue * 1.4 + 180);
  
  const { rotation } = useSpring({
    from: { rotation:  0 },
    to: { rotation: powerValue * 1.4 + 180 },
    config: { tension: 180, friction: 12 },
  });

  const getPower= (angle) => {
    console.log(angle);
    switch (angle) {
      case 180:
        return 0;
      case 215:
        return 250;
      case 250:
        return 500;
      case 285:
        return 750;
      case 320:
        return 1000;
      default: 
        return 0;
    }
    
  };
  console.log(getPower(powerValue));
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
           <div className="power-value">
            <div>{getPower(powerValue * 1.4 + 180)}</div>
            <div className='power-unit'> kW </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

PowerGauge.propTypes = {
  powerValue: PropTypes.number.isRequired,
};

export default PowerGauge;


