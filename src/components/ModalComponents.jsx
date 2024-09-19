import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const DashboardItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-3 bg-[#b73616]/30 p-3 rounded-lg">
    <Icon className="text-[#ffd0a8] w-5 h-5" />
    <div>
      <div className="text-[#ffd0a8] text-xs opacity-70">{label}</div>
      <div className="text-[#ffd0a8] text-sm font-semibold">{value}</div>
    </div>
  </div>
);

export const ProgressBar = ({ label, value, max }) => (
  <div className="mt-2">
    <div className="flex justify-between text-[#ffd0a8] text-xs mb-1">
      <span>{label}</span>
      <span>{value}/{max}</span>
    </div>
    <div className="bg-[#ffd0a8]/20 h-2 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-[#ffd0a8]"
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  </div>
);

export const PredictionDisplay = ({ label, prediction }) => (
  <motion.div
    key={prediction}
    initial={{ opacity: 0.5 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="mt-2 bg-[#b73616]/30 p-3 rounded-lg"
  >
    <div className="text-[#ffd0a8] text-xs opacity-70 mb-1">{label}</div>
    <div className="text-[#ffd0a8] text-sm h-16 overflow-y-auto">
      {prediction}
    </div>
  </motion.div>
);

export const FlashingText = ({ text }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [text]);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-[#ffd0a8] text-sm font-mono"
    >
      {text}
    </motion.div>
  );
};
