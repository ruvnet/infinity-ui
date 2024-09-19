import React from 'react';
import { motion } from 'framer-motion';
import { X, Radio, Brain, Atom, Clock, Activity, Settings } from 'lucide-react';
import { NeuralInterface, QuantumPredictions, TemporalAnomalies, SystemDiagnostics } from './ModalContent';
import { Communications } from './Communications';
import SettingsComponent from './SettingsComponent';

const getModalIcon = (title) => {
  switch (title) {
    case 'Communications': return Radio;
    case 'Neural Interface': return Brain;
    case 'Quantum Predictions': return Atom;
    case 'Temporal Anomalies': return Clock;
    case 'System Diagnostics': return Activity;
    case 'Settings': return Settings;
    default: return null;
  }
};

const Modal = ({ title, onClose }) => {
  const getModalContent = () => {
    switch (title) {
      case 'Communications':
        return <Communications />;
      case 'Neural Interface':
        return <NeuralInterface />;
      case 'Quantum Predictions':
        return <QuantumPredictions />;
      case 'Temporal Anomalies':
        return <TemporalAnomalies />;
      case 'System Diagnostics':
        return <SystemDiagnostics />;
      case 'Settings':
        return <SettingsComponent />;
      default:
        return null;
    }
  };

  const IconComponent = getModalIcon(title);

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
        className="bg-[#b73616] p-6 rounded-lg border border-[#ffd0a8] w-11/12 max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#ffd0a8] text-xl font-semibold flex items-center">
            {IconComponent && <IconComponent className="mr-2 h-6 w-6" />}
            {title}
          </h2>
          <button onClick={onClose} className="text-[#ffd0a8] hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="text-[#ffd0a8] space-y-4">
          {getModalContent()}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
