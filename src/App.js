import React, { useEffect, useState } from 'react';
import Indicators from './components/Indicators';
import MidRow from './components/MidRow';
import Footer from './components/Footer';
import Gauges from './components/Gauges';

import axios from 'axios';
import './App.css';

const BASE_URL = " https://backend-service-847633672572.us-central1.run.app";
//const BASE_URL = "http://localhost:8080"

const App = () => {

  const [dashboardData, setDashboardData] = useState({
    indicators: {},
    motorSpeed: 0,
    batteryPercentage: 100,
    powerConsumption: 0,
    motorRPM: 0,
    gearRatio: "3/4",
    isCharging: false,
  });

  const [enableSlider, setEnableSlider] = useState(true);
  const [sliderSpeed, setSliderSpeed] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get( BASE_URL + '/api/dashboard');
        setDashboardData(response.data);
        
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 200); // Poll every 200 ms
    return () => clearInterval(interval);
  }, []);

  const handleSpeedChange = async (speed) => {
    try {
      await axios.post(BASE_URL + '/api/dashboard/motor-speed', { speed });
      setDashboardData((prevState) => ({ ...prevState, motorSpeed: speed }));
      setSliderSpeed(speed);
    } catch (error) {
      console.error('Error updating motor speed:', error);
    }
  };

  const handleChargingToggle = async () => {
    try {
      console.log("Current state before toggle:", dashboardData.isCharging);
  
      // Toggle the charging state
      const newChargingState = !dashboardData.isCharging;
  
      // Send the updated charging state to the backend
      const response = await axios.post(BASE_URL + '/api/dashboard/charging', { charging: newChargingState });
  
      // Update the React state based on the backend's response
      setDashboardData((prevState) => ({
        ...prevState,
        ...response.data, // Assume the backend sends back the updated dashboard data
      }));
  
      // Update slider state based on the new charging state
      if (newChargingState) {
        setEnableSlider(false);
        setSliderSpeed(0); // Reset slider when charging
      } else {
        setEnableSlider(true);
      }
  
      console.log("Updated state after toggle:", newChargingState);
    } catch (error) {
      console.error('Error updating charging state:', error);
    }
  };
  

  
  return (
    <div className="app">
    
      <Indicators indicators={dashboardData.indicators} />
      <Gauges powerValue={dashboardData.powerConsumption} motorRPM={dashboardData.motorRPM} />
      <MidRow
        batteryPercentage={dashboardData.batteryPercentage}
        batteryTemperature={dashboardData.batteryTemperature}
        motorRPM={dashboardData.motorRPM}
        gearRatio={dashboardData.gearRatio}
        initialSpeed={sliderSpeed}
        enableSlider={enableSlider}
        onSpeedChange={handleSpeedChange}
      />
      <Footer
        onGearClick={() => console.log('Gear info clicked')}
        onMotorClick={() => console.log('Motor info clicked')}
        onBatteryTempClick={() => console.log('Battery temp info clicked')}
        onMenuClick={() => console.log('Menu clicked')}
        onChargingToggle={handleChargingToggle}
        initialChargingState={dashboardData.isCharging}
      />
    </div>
  );
};

export default App;


