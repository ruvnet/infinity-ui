import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TypewriterText = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Modal = ({ title, onClose }) => {
  const getModalContent = () => {
    switch (title) {
      case 'Neural Interface':
        return (
          <div className="space-y-4">
            <TypewriterText text="Synaptic Link Established" />
            <TypewriterText text="Cognitive Enhancement: Active" />
            <div className="grid grid-cols-3 gap-2">
              {['Alpha', 'Beta', 'Gamma', 'Delta', 'Theta', 'Epsilon'].map((wave) => (
                <div key={wave} className="h-8 bg-[#f8d2ad] opacity-20 rounded flex items-center justify-center">
                  <TypewriterText text={wave} />
                </div>
              ))}
            </div>
          </div>
        );
      case 'Quantum Predictions':
        return (
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-30 rounded flex items-center justify-center">
                <TypewriterText text="Past" />
              </div>
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-50 rounded flex items-center justify-center">
                <TypewriterText text="Present" />
              </div>
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-70 rounded flex items-center justify-center">
                <TypewriterText text="Future" />
              </div>
            </div>
            <div className="h-32 bg-[#f8d2ad] opacity-20 rounded flex items-center justify-center">
              <TypewriterText text="Probability Matrix Calculating..." />
            </div>
          </div>
        );
      case 'Temporal Anomalies':
        return (
          <div className="space-y-4">
            <div className="flex space-x-2">
              {['2023', '2045', '2077', '2101'].map((year) => (
                <div key={year} className="w-1/4 h-8 bg-[#f8d2ad] opacity-40 rounded flex items-center justify-center">
                  <TypewriterText text={year} />
                </div>
              ))}
            </div>
            <div className="h-40 bg-[#f8d2ad] opacity-30 rounded flex items-center justify-center">
              <TypewriterText text="Temporal Flux Detected" />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 h-8 bg-[#f8d2ad] opacity-50 rounded flex items-center justify-center">
                <TypewriterText text="Paradox Risk: Low" />
              </div>
              <div className="w-1/3 h-8 bg-[#f8d2ad] opacity-50 rounded flex items-center justify-center">
                <TypewriterText text="Stabilizing..." />
              </div>
            </div>
          </div>
        );
      case 'System Diagnostics':
        return (
          <div className="space-y-4">
            <div className="h-8 bg-[#f8d2ad] opacity-60 rounded flex items-center justify-center">
              <TypewriterText text="System Integrity: 98.7%" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['CPU Load', 'Memory Usage', 'Quantum Core', 'AI Subsystems'].map((item) => (
                <div key={item} className="h-16 bg-[#f8d2ad] opacity-30 rounded flex items-center justify-center">
                  <TypewriterText text={`${item}: Optimal`} />
                </div>
              ))}
            </div>
            <div className="h-8 bg-[#f8d2ad] opacity-40 rounded flex items-center justify-center">
              <TypewriterText text="All Systems Nominal" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#b73616] p-6 rounded-none border border-[#f8d2ad] w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#f8d2ad] text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-[#f8d2ad] hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="text-[#f8d2ad]">
          {getModalContent()}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
