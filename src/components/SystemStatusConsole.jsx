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
      className="bg-[#c34524]/20 p-3 rounded-md border border-[#ffd0a8]/30 text-[#ffd0a8] font-mono text-xs md:text-sm w-full md:w-64"
    >
      <div className="flex items-center space-x-2 mb-1">
        <Monitor size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-sm">System Status: Online</span>
      </div>
      <div className="flex items-center space-x-2 mb-1">
        <Thermometer size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-sm">CPU Temp: {cpuTemp}°C</span>
      </div>
      <div className="flex items-center space-x-2 mb-1">
        <Wifi size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-sm">Signal Strength: {wifiStrength}/5</span>
      </div>
      <div className="flex items-center space-x-2">
        <Battery size={12} className="md:w-4 md:h-4" />
        <span className="text-[10px] md:text-sm">Power: {batteryLevel}%</span>
      </div>
    </motion.div>
  );
};

export default SystemStatusConsole;
