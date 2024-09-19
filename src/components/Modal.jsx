import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ title, onClose }) => {
  const getModalContent = () => {
    switch (title) {
      case 'Neural Interface':
        return (
          <div className="space-y-4 text-[#f8d2ad]">
            <p>Synaptic links established. Consciousness expanded.</p>
            <p>The neural mesh hums with potential, ready to unlock the secrets of the cosmos.</p>
            <p>Warning: Uncharted neural pathways detected. Proceed with caution.</p>
          </div>
        );
      case 'Quantum Predictions':
        return (
          <div className="space-y-4 text-[#f8d2ad]">
            <p>Quantum fluctuations reveal glimpses of possible futures.</p>
            <p>Probability waves collapse: A nexus of realities converges.</p>
            <p>Attention: Temporal paradox risk at 63%. Stabilize the continuum.</p>
          </div>
        );
      case 'Temporal Anomalies':
        return (
          <div className="space-y-4 text-[#f8d2ad]">
            <p>Chrono-distortions detected in sector 7G.</p>
            <p>Past and future bleed into the present. Time itself unravels.</p>
            <p>Critical: Initiate temporal containment protocols immediately.</p>
          </div>
        );
      case 'System Diagnostics':
        return (
          <div className="space-y-4 text-[#f8d2ad]">
            <p>AI Core: Optimal | Quantum Drive: 98% | Temporal Shields: Fluctuating</p>
            <p>Anomaly detected: Unknown energy signature permeating all systems.</p>
            <p>Urgent: Recalibrate all sensors. Prepare for transdimensional shift.</p>
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
