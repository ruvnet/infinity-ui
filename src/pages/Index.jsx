import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import HamburgerMenu from '../components/HamburgerMenu';
import SystemStatusConsole from '../components/SystemStatusConsole';

const loadingStatements = [
  "Initializing quantum neural networks...",
  "Calibrating temporal flux capacitors...",
  "Synchronizing with galactic mainframe...",
  "Decrypting subspace transmissions...",
  "Activating sentient AI protocols...",
  "Engaging hyperdimensional algorithms...",
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStatement, setCurrentStatement] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    const statementInterval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % loadingStatements.length);
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearInterval(statementInterval);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#c34524] text-[#ffd0a8] relative p-4">
      <div className="absolute top-4 left-4 w-[calc(100%-2rem)] sm:w-56 md:w-64">
        <SystemStatusConsole />
      </div>
      <div className="absolute top-4 right-4 z-50">
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="text-center flex flex-col items-center mt-24 md:mt-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        >
          <dotlottie-player
            src="https://lottie.host/8e226440-96e5-469a-b179-1b2fa30ed153/gEwqUUfYx6.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
            direction="-1"
            playMode="normal"
            loop
            autoplay
          ></dotlottie-player>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStatement}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-sm md:text-lg font-mono tracking-wider max-w-md text-center"
          >
            {loadingStatements[currentStatement]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
