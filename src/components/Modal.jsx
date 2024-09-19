import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { NeuralInterface, QuantumPredictions, TemporalAnomalies, SystemDiagnostics, Communications } from './ModalContent';

const getRandomPrediction = () => {
  const predictions = [
    "Temporal flux detected in sector 7G. Probability of causality loop formation: 23.7%. Recommend immediate chronometric particle stabilization.",
    "Probability of parallel universe collision: 0.003%. Increasing interdimensional shielding advised. Monitor for quantum entanglement spikes in the next 72 hours.",
    "Quantum entanglement surge in progress. Estimated duration: 3.5 hours. Impact on local reality: minimal. Prepare for potential spacetime ripples in adjacent sectors.",
    "Chronoton particles increasing in local space-time. Temporal stability at 94.2% and holding. Advise caution when initiating any time-sensitive experiments.",
    "Potential timeline divergence detected. Calculating optimal intervention strategies... Probability of successful realignment: 78.3%. Standby for further instructions.",
    "Anomalous energy signature detected in the Andromeda galaxy. Origin: unknown. Threat level: low. Initiating long-range quantum scans for further analysis.",
    "Quantum tunneling event predicted within 24 hours. Preparing containment protocols. Estimated impact radius: 3.7 parsecs. Alert nearby star systems.",
    "Probability of encountering alternate reality: 17.8%. Interdimensional travel advisory in effect. Recalibrate all quantum compasses and reality anchors.",
    "Subspace distortion forming in nearby star system. Monitoring for potential wormhole formation. Current stability: 89.5%. Prepare evacuation protocols as precaution.",
    "Temporal echo from future event detected. Data analysis underway. Preliminary findings inconclusive. Temporal shielding recommended for all sensitive equipment."
  ];
  return predictions[Math.floor(Math.random() * predictions.length)];
};

const Modal = ({ title, onClose }) => {
  const getModalContent = () => {
    switch (title) {
      case 'Communications':
        return <Communications />;
      case 'Neural Interface':
        return <NeuralInterface />;
      case 'Quantum Predictions':
        return <QuantumPredictions getRandomPrediction={getRandomPrediction} />;
      case 'Temporal Anomalies':
        return <TemporalAnomalies />;
      case 'System Diagnostics':
        return <SystemDiagnostics />;
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
        className="bg-[#b73616] p-6 rounded-lg border border-[#ffd0a8] w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#ffd0a8] text-xl font-semibold">{title}</h2>
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
