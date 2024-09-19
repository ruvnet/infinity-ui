import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-[#ff4500] z-50 relative">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-black/90 shadow-lg p-4 flex flex-col items-center justify-center"
          >
            <div className="absolute top-4 right-4">
              <button onClick={() => setIsOpen(false)} className="text-[#ff4500]">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-8">
              <MenuOption text="AI Predictions" />
              <MenuOption text="System Status" />
              <MenuOption text="Mission Control" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuOption = ({ text }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <div className="w-40 h-40 rounded-full border-2 border-[#ff4500] flex items-center justify-center">
      <div className="w-36 h-36 rounded-full bg-[#ff4500]/10 flex items-center justify-center">
        <span className="text-[#ff4500] font-mono text-sm tracking-wider">{text}</span>
      </div>
    </div>
  </motion.div>
);

export default HamburgerMenu;
