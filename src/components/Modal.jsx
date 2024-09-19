import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TypewriterText = ({ text, placeholder }) => {
  return (
    <div className="mb-4">
      <div className="text-[#ffd0a8] opacity-50 mb-1 text-xs">{placeholder}</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#ffd0a8] text-sm"
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
    </div>
  );
};

const Modal = ({ title, onClose }) => {
  const getModalContent = () => {
    switch (title) {
      case 'Neural Interface':
        return (
          <div className="space-y-4">
            <TypewriterText placeholder="Synaptic Link Status" text="Synaptic Link Established" />
            <TypewriterText placeholder="Cognitive Enhancement" text="Cognitive Enhancement: Active" />
            <TypewriterText placeholder="Neural Pathway Status" text="Neural Pathways: Optimized" />
            <TypewriterText placeholder="Thought Amplification" text="Thought Amplification: 300%" />
            <TypewriterText placeholder="Memory Recall Status" text="Memory Recall: Enhanced" />
            <TypewriterText placeholder="Subconscious Integration" text="Subconscious Integration: In Progress" />
          </div>
        );
      case 'Quantum Predictions':
        return (
          <div className="space-y-4">
            <TypewriterText placeholder="Quantum Entanglement Status" text="Quantum Entanglement: Stable" />
            <TypewriterText placeholder="Timeline Divergence" text="Timeline Divergence: 17.3%" />
            <TypewriterText placeholder="Parallel Universes" text="Parallel Universes Analyzed: 1,287" />
            <TypewriterText placeholder="Causality Loops" text="Causality Loops Detected: 3" />
            <TypewriterText placeholder="Probability Matrix" text="Probability Matrix Calculating..." />
          </div>
        );
      case 'Temporal Anomalies':
        return (
          <div className="space-y-4">
            <TypewriterText placeholder="Temporal Flux" text="Temporal Flux Detected" />
            <TypewriterText placeholder="Paradox Risk" text="Paradox Risk: Moderate" />
            <TypewriterText placeholder="Chrono-particle Count" text="Chrono-particles Detected: 1.8M" />
            <TypewriterText placeholder="Time Dilation Factor" text="Time Dilation Factor: x2.7" />
            <TypewriterText placeholder="Temporal Echoes" text="Temporal Echoes: 5" />
          </div>
        );
      case 'System Diagnostics':
        return (
          <div className="space-y-4">
            <TypewriterText placeholder="System Integrity" text="System Integrity: 98.7%" />
            <TypewriterText placeholder="AI Subsystems" text="AI Subsystems: Optimal" />
            <TypewriterText placeholder="Quantum Core" text="Quantum Core: Stable" />
            <TypewriterText placeholder="Firewall Status" text="Firewall Integrity: 99.9%" />
            <TypewriterText placeholder="Encryption Status" text="Quantum Encryption: Active" />
            <TypewriterText placeholder="System Uptime" text="System Uptime: 7,345 days" />
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
