import React from 'react';
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
  <div className="mt-2 bg-[#b73616]/30 p-3 rounded-lg">
    <div className="text-[#ffd0a8] text-xs opacity-70 mb-1">{label}</div>
    <div className="text-[#ffd0a8] text-sm h-16 overflow-y-auto whitespace-pre-wrap">
      <span className="inline-block min-w-[1px]">{prediction}</span>
    </div>
  </div>
);
