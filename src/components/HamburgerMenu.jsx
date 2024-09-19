import React from 'react';
import { Menu, X, Brain, Atom, Clock, Activity, Radio, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  const [activeModal, setActiveModal] = React.useState(null);

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
    toggleMenu();
  };

  return (
    <>
      <button onClick={toggleMenu} className="text-[#ffd0a8] z-50 relative">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-full w-64 md:w-64 bg-[#b73616] shadow-lg p-4 flex flex-col"
          >
            <nav className="mt-8 flex-grow">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleItemClick(item.name)}
                      className="text-[#ffd0a8] hover:text-white transition-colors duration-300 flex items-center space-x-2 group w-full text-left"
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative overflow-hidden">
                        <motion.span
                          className="inline-block"
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="mt-auto text-[#ffd0a8] text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div>System Status: Online</div>
              <div className="flex items-center text-xs mt-1 opacity-70">
                <Atom size={10} className="mr-1" />
                created by rUv, no rights reserved
              </div>
            </motion.div>
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
