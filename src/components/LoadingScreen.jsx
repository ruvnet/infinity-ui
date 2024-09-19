import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#c34524] text-[#ffd0a8]">
      <motion.div
        className="w-16 h-16 mb-8"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 15 C60 25, 80 25, 90 15 S100 5, 90 -5 S70 -15, 60 -5 S50 5, 50 15"
            fill="none"
            stroke="#ffd0a8"
            strokeWidth="8"
          />
        </svg>
      </motion.div>
      <div className="w-48 h-2 bg-[#ffd0a8]/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#ffd0a8]"
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