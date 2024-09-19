import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TypewriterText = ({ text, placeholder }) => {
  return (
    <div className="relative">
      <div className="text-[#ffd0a8] opacity-50 mb-1 text-sm">{placeholder}</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#ffd0a8] text-opacity-80 text-sm"
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
            <div className="grid grid-cols-3 gap-2">
              {['Alpha', 'Beta', 'Gamma', 'Delta', 'Theta', 'Epsilon'].map((wave) => (
                <div key={wave} className="h-8 bg-[#f8d2ad] opacity-20 rounded flex items-center justify-center">
                  <TypewriterText placeholder="Brain Wave" text={wave} />
                </div>
              ))}
            </div>
            <TypewriterText placeholder="Thought Amplification" text="Thought Amplification: 300%" />
            <TypewriterText placeholder="Memory Recall Status" text="Memory Recall: Enhanced" />
            <TypewriterText placeholder="Subconscious Integration" text="Subconscious Integration: In Progress" />
          </div>
        );
      case 'Quantum Predictions':
        return (
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-30 rounded flex items-center justify-center">
                <TypewriterText placeholder="Time State" text="Past" />
              </div>
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-50 rounded flex items-center justify-center">
                <TypewriterText placeholder="Time State" text="Present" />
              </div>
              <div className="w-1/3 h-16 bg-[#f8d2ad] opacity-70 rounded flex items-center justify-center">
                <TypewriterText placeholder="Time State" text="Future" />
              </div>
            </div>
            <div className="h-32 bg-[#f8d2ad] opacity-20 rounded flex items-center justify-center">
              <TypewriterText placeholder="Probability Matrix" text="Probability Matrix Calculating..." />
            </div>
            <TypewriterText placeholder="Quantum Entanglement Status" text="Quantum Entanglement: Stable" />
            <TypewriterText placeholder="Timeline Divergence" text="Timeline Divergence: 17.3%" />
            <TypewriterText placeholder="Parallel Universes" text="Parallel Universes Analyzed: 1,287" />
            <TypewriterText placeholder="Causality Loops" text="Causality Loops Detected: 3" />
          </div>
        );
      case 'Temporal Anomalies':
        return (
          <div className="space-y-4">
            <div className="flex space-x-2">
              {['2023', '2045', '2077', '2101'].map((year) => (
                <div key={year} className="w-1/4 h-8 bg-[#f8d2ad] opacity-40 rounded flex items-center justify-center">
                  <TypewriterText placeholder="Year" text={year} />
                </div>
              ))}
            </div>
            <div className="h-40 bg-[#f8d2ad] opacity-30 rounded flex items-center justify-center">
              <TypewriterText placeholder="Temporal Flux" text="Temporal Flux Detected" />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 h-8 bg-[#f8d2ad] opacity-50 rounded flex items-center justify-center">
                <TypewriterText placeholder="Paradox Risk" text="Paradox Risk: Moderate" />
              </div>
              <div className="w-1/3 h-8 bg-[#f8d2ad] opacity-50 rounded flex items-center justify-center">
                <TypewriterText placeholder="Stabilization Status" text="Stabilizing..." />
              </div>
            </div>
            <TypewriterText placeholder="Chrono-particle Count" text="Chrono-particles Detected: 1.8M" />
            <TypewriterText placeholder="Time Dilation Factor" text="Time Dilation Factor: x2.7" />
            <TypewriterText placeholder="Temporal Echoes" text="Temporal Echoes: 5" />
          </div>
        );
      case 'System Diagnostics':
        return (
          <div className="space-y-4">
            <div className="h-8 bg-[#f8d2ad] opacity-60 rounded flex items-center justify-center">
              <TypewriterText placeholder="System Integrity" text="System Integrity: 98.7%" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['CPU Load', 'Memory Usage', 'Quantum Core', 'AI Subsystems'].map((item) => (
                <div key={item} className="h-16 bg-[#f8d2ad] opacity-30 rounded flex items-center justify-center">
                  <TypewriterText placeholder={item} text={`${item}: Optimal`} />
                </div>
              ))}
            </div>
            <div className="h-8 bg-[#f8d2ad] opacity-40 rounded flex items-center justify-center">
              <TypewriterText placeholder="System Status" text="All Systems Nominal" />
            </div>
            <TypewriterText placeholder="Firewall Status" text="Firewall Integrity: 99.9%" />
            <TypewriterText placeholder="Encryption Status" text="Quantum Encryption: Active" />
            <TypewriterText placeholder="Self-Repair Status" text="Self-Repair Protocols: Engaged" />
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
