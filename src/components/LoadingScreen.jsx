import React from 'react';
import { motion } from 'framer-motion';
import HamburgerMenu from './HamburgerMenu';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-[#ff4500]">
      <motion.div
        className="w-48 h-48 mb-8 relative"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#ff4500" strokeWidth="2" />
          <path
            d="M50 5 A45 45 0 0 1 95 50"
            fill="none"
            stroke="#ff4500"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-black border-2 border-[#ff4500] flex items-center justify-center">
          <span className="text-2xl font-bold">HAL</span>
        </div>
      </motion.div>
      <div className="w-48 h-2 bg-[#ff4500]/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#ff4500]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="absolute top-4 right-4">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default LoadingScreen;
