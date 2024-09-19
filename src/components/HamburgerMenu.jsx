import React, { useState } from 'react';
import { Menu, X, Brain, Atom, Clock, Activity, Radio, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const menuItems = [
    { name: "Communications", icon: Radio },
    { name: "Neural Interface", icon: Brain },
    { name: "Quantum Predictions", icon: Atom },
    { name: "Temporal Anomalies", icon: Clock },
    { name: "System Diagnostics", icon: Activity },
    { name: "Settings", icon: Settings },
  ];

  const handleItemClick = (itemName) => {
    setActiveModal(itemName);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="text-[#ffd0a8] z-50 relative">
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween' }}
            className="absolute top-8 right-0 w-48 bg-[#b73616] shadow-lg rounded-lg overflow-hidden"
          >
            <nav>
              <ul className="py-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleItemClick(item.name)}
                      className="w-full text-left px-4 py-2 text-[#ffd0a8] hover:bg-[#ffd0a8]/10 transition-colors flex items-center space-x-2"
                    >
                      <item.icon size={16} />
                      <span>{item.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {activeModal && (
        <Modal title={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};

export default HamburgerMenu;
