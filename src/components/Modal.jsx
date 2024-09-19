import React from 'react';
import { motion } from 'framer-motion';
import { X, Brain, Activity, Zap, Cpu, Atom, GitBranch, Shuffle, Compass } from 'lucide-react';

const DashboardItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-3 bg-[#b73616]/30 p-3 rounded-lg">
    <Icon className="text-[#ffd0a8] w-5 h-5" />
    <div>
      <div className="text-[#ffd0a8] text-xs opacity-70">{label}</div>
      <div className="text-[#ffd0a8] text-sm font-semibold">{value}</div>
    </div>
  </div>
);

const ProgressBar = ({ label, value, max }) => (
  <div className="mt-2">
    <div className="flex justify-between text-[#ffd0a8] text-xs mb-1">
      <span>{label}</span>
      <span>{value}/{max}</span>
    </div>
    <div className="bg-[#ffd0a8]/20 h-2 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-[#ffd0a8]"
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  </div>
);

const getRandomPrediction = () => {
  const predictions = [
    "Temporal flux detected in sector 7G. Probability of causality loop formation: 23.7%",
    "Probability of parallel universe collision: 0.003%. Recommend increasing interdimensional shielding",
    "Quantum entanglement surge in progress. Estimated duration: 3.5 hours. Impact on local reality: minimal",
    "Chronoton particles increasing in local space-time. Temporal stability at 94.2% and holding",
    "Potential timeline divergence detected. Calculating optimal intervention strategies...",
    "Anomalous energy signature detected in the Andromeda galaxy. Origin: unknown. Threat level: low",
    "Quantum tunneling event predicted within 24 hours. Preparing containment protocols",
    "Probability of encountering alternate reality: 17.8%. Interdimensional travel advisory in effect",
    "Subspace distortion forming in nearby star system. Monitoring for potential wormhole formation",
    "Temporal echo from future event detected. Data analysis underway. Preliminary findings inconclusive"
  ];
  return predictions[Math.floor(Math.random() * predictions.length)];
};

const Modal = ({ title, onClose }) => {
  const getModalContent = () => {
    switch (title) {
      case 'Neural Interface':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <DashboardItem icon={Brain} label="Synaptic Link" value="Active" />
              <DashboardItem icon={Activity} label="Neural Activity" value="87%" />
              <DashboardItem icon={Zap} label="Cognitive Boost" value="+35%" />
              <DashboardItem icon={Cpu} label="Processing Power" value="1.2 PHz" />
            </div>
            <ProgressBar label="Memory Optimization" value={750} max={1000} />
            <ProgressBar label="Thought Amplification" value={3} max={5} />
            <div className="mt-4 bg-[#b73616]/30 p-3 rounded-lg">
              <div className="text-[#ffd0a8] text-xs opacity-70 mb-1">Neural Pathway Status</div>
              <div className="text-[#ffd0a8] text-sm">
                Optimizing... Current efficiency: 92.7%
              </div>
            </div>
          </div>
        );
      case 'Quantum Predictions':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <DashboardItem icon={Atom} label="Quantum Entanglement" value="Stable" />
              <DashboardItem icon={GitBranch} label="Timeline Divergence" value="17.3%" />
              <DashboardItem icon={Shuffle} label="Parallel Universes" value="1,287" />
              <DashboardItem icon={Compass} label="Causality Loops" value="3" />
            </div>
            <ProgressBar label="Probability Matrix Calculation" value={78} max={100} />
            <ProgressBar label="Quantum Coherence" value={92} max={100} />
            <div className="mt-4 bg-[#b73616]/30 p-3 rounded-lg">
              <div className="text-[#ffd0a8] text-xs opacity-70 mb-1">Latest Quantum Prediction</div>
              <div className="text-[#ffd0a8] text-sm">
                {getRandomPrediction()}
              </div>
            </div>
            <div className="mt-4 bg-[#b73616]/30 p-3 rounded-lg">
              <div className="text-[#ffd0a8] text-xs opacity-70 mb-1">Quantum Forecast</div>
              <div className="text-[#ffd0a8] text-sm">
                {getRandomPrediction()}
              </div>
            </div>
          </div>
        );
      case 'Temporal Anomalies':
        return (
          <div className="space-y-4">
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Temporal Flux</div>
              <div>Detected</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Paradox Risk</div>
              <div>Moderate</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Chrono-particles Detected</div>
              <div>1.8M</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Time Dilation Factor</div>
              <div>x2.7</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Temporal Echoes</div>
              <div>5</div>
            </div>
          </div>
        );
      case 'System Diagnostics':
        return (
          <div className="space-y-4">
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">System Integrity</div>
              <div>98.7%</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">AI Subsystems</div>
              <div>Optimal</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Quantum Core</div>
              <div>Stable</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Firewall Integrity</div>
              <div>99.9%</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">Quantum Encryption</div>
              <div>Active</div>
            </div>
            <div className="text-[#ffd0a8] text-sm">
              <div className="opacity-70 mb-1">System Uptime</div>
              <div>7,345 days</div>
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
