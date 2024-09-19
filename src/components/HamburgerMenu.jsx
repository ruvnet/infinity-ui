import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-[#ffd0a8] z-50 relative">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-full w-64 bg-[#c34524] shadow-lg p-4"
          >
            <nav className="mt-8">
              <ul className="space-y-4">
                <li><a href="#" className="text-[#ffd0a8] hover:underline">Neural Interface</a></li>
                <li><a href="#" className="text-[#ffd0a8] hover:underline">Quantum Predictions</a></li>
                <li><a href="#" className="text-[#ffd0a8] hover:underline">Temporal Anomalies</a></li>
                <li><a href="#" className="text-[#ffd0a8] hover:underline">System Diagnostics</a></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
