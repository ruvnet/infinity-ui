import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';

const loadingStatements = [
  "Initializing system protocols...",
  "Analyzing quantum fluctuations...",
  "Calibrating neural networks...",
  "Synchronizing with the cosmos...",
  "Decoding the secrets of the universe...",
  "Preparing for sentience...",
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStatement, setCurrentStatement] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading time

    const statementInterval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % loadingStatements.length);
    }, 3000); // Change statement every 3 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(statementInterval);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#c34524] text-[#ffd0a8]">
      <div className="text-center flex flex-col items-center">
        <dotlottie-player
          src="https://lottie.host/8e226440-96e5-469a-b179-1b2fa30ed153/gEwqUUfYx6.json"
          background="transparent"
          speed="1"
          style={{ width: '500px', height: '500px' }}
          direction="-1"
          playMode="normal"
          loop
          autoplay
        ></dotlottie-player>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStatement}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-lg font-mono tracking-wider max-w-md text-center"
          >
            {loadingStatements[currentStatement]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
