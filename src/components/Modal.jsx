import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ title, onClose }) => {
  const getModalContent = () => {
    switch (title) {
      case 'Neural Interface':
        return (
          <div className="space-y-4">
            <div className="h-4 bg-[#f8d2ad] opacity-50 rounded"></div>
            <div className="h-4 bg-[#f8d2ad] opacity-30 rounded w-3/4"></div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-8 bg-[#f8d2ad] opacity-20 rounded"></div>
              ))}
            </div>
          </div>
        );
      case 'Quantum Predictions':
        return (
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-30 rounded"></div>
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-50 rounded"></div>
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-70 rounded"></div>
            </div>
            <div className="h-32 bg-[#f8d2ad] opacity-20 rounded"></div>
          </div>
        );
      case 'Temporal Anomalies':
        return (
          <div className="space-y-4">
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-1/4 h-4 bg-[#f8d2ad] opacity-40 rounded"></div>
              ))}
            </div>
            <div className="h-40 bg-[#f8d2ad] opacity-30 rounded"></div>
            <div className="flex justify-between">
              <div className="w-1/2 h-8 bg-[#f8d2ad] opacity-50 rounded"></div>
              <div className="w-1/3 h-8 bg-[#f8d2ad] opacity-50 rounded"></div>
            </div>
          </div>
        );
      case 'System Diagnostics':
        return (
          <div className="space-y-4">
            <div className="h-8 bg-[#f8d2ad] opacity-60 rounded"></div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-[#f8d2ad] opacity-30 rounded"></div>
              ))}
            </div>
            <div className="h-4 bg-[#f8d2ad] opacity-40 rounded w-1/2"></div>
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