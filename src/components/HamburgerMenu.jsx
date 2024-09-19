import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Neural Interface", icon: "🧠" },
    { name: "Quantum Predictions", icon: "🔮" },
    { name: "Temporal Anomalies", icon: "⏳" },
    { name: "System Diagnostics", icon: "🔬" },
  ];

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
            className="fixed top-0 right-0 h-full w-64 bg-[#c34524] shadow-lg p-4 flex flex-col"
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
                    <a
                      href="#"
                      className="text-[#ffd0a8] hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
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
                    </a>
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
              System Status: Online
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
