import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Wifi, Battery, Thermometer } from 'lucide-react';

const SystemStatusConsole = () => {
  const [cpuTemp, setCpuTemp] = useState(0);
  const [wifiStrength, setWifiStrength] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    const updateStatus = () => {
      setCpuTemp(Math.floor(Math.random() * 30) + 40);
      setWifiStrength(Math.floor(Math.random() * 5) + 1);
      setBatteryLevel(Math.floor(Math.random() * 100));
    };

    updateStatus();
    const interval = setInterval(updateStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-4 left-4 bg-[#c34524]/20 p-2 rounded-md border border-[#ffd0a8]/30 text-[#ffd0a8] font-mono text-xs"
    >
      <div className="flex items-center space-x-2 mb-1">
        <Monitor size={12} />
        <span>System Status: Online</span>
      </div>
      <div className="flex items-center space-x-2 mb-1">
        <Thermometer size={12} />
        <span>CPU Temp: {cpuTemp}°C</span>
      </div>
      <div className="flex items-center space-x-2 mb-1">
        <Wifi size={12} />
        <span>Signal Strength: {wifiStrength}/5</span>
      </div>
      <div className="flex items-center space-x-2">
        <Battery size={12} />
        <span>Power: {batteryLevel}%</span>
      </div>
    </motion.div>
  );
};

export default SystemStatusConsole;