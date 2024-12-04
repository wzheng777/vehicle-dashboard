import React, { useEffect, useState } from 'react';
import Indicators from './components/Indicators';
import MidRow from './components/MidRow';
import Footer from './components/Footer';
import Gauges from './components/Gauges';
import axios from 'axios';
import './App.css';

const BASE_URL = "http://localhost:5001";

const App = () => {


  const [dashboardData, setDashboardData] = useState({
    indicators: {},
    motorSpeed: 0,
    batteryPercentage: 100,
    powerConsumption: 0,
    motorRPM: 0,
    isCharging: false,
  });

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
    const interval = setInterval(fetchDashboardData, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSpeedChange = async (speed) => {
    try {
      await axios.post(BASE_URL + '/api/dashboard/motor-speed', { speed });
      setDashboardData((prevState) => ({ ...prevState, motorSpeed: speed }));
    } catch (error) {
      console.error('Error updating motor speed:', error);
    }
  };

  const handleChargingToggle = async () => {
    try {
      await axios.post(BASE_URL + '/api/dashboard/charging', { charging: !dashboardData.isCharging });
      setDashboardData((prevState) => ({ ...prevState, isCharging: !prevState.isCharging }));
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
        initialSpeed={dashboardData.motorSpeed}
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


