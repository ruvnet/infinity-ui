import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Radio, Brain, Atom, Clock, Activity, Settings } from 'lucide-react';
import { NeuralInterface, QuantumPredictions, TemporalAnomalies, SystemDiagnostics } from './ModalContent';
import { Communications } from './Communications';
import MobileCommunications from './MobileCommunications';
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
        return window.innerWidth < 768 ? <MobileCommunications /> : <Communications />;
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

  const getModalWidth = () => {
    if (title === 'Communications' && window.innerWidth >= 768) {
      return 'w-11/12 max-w-4xl';
    } else if (title === 'Communications' && window.innerWidth < 768) {
      return 'w-full h-full';
    } else {
      return 'w-11/12 max-w-xs';
    }
  };

  const flickerAnimation = {
    initial: { opacity: 0 },
    animate: { 
      opacity: [0, 1, 0.5, 1, 0.8, 1],
      transition: { 
        duration: 0.3,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          {...flickerAnimation}
          className={`bg-[#b73616] rounded-lg border border-[#ffd0a8] ${getModalWidth()} ${
            title === 'Communications' && window.innerWidth < 768 ? 'p-0' : 'p-6'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {(title !== 'Communications' || window.innerWidth >= 768) && (
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#ffd0a8] text-xl font-semibold flex items-center">
                {IconComponent && <IconComponent className="mr-2 h-6 w-6" />}
                {title}
              </h2>
              <button onClick={onClose} className="text-[#ffd0a8] hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
          )}
          <div className={`text-[#ffd0a8] ${title === 'Communications' && window.innerWidth < 768 ? 'h-full' : ''}`}>
            {getModalContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
