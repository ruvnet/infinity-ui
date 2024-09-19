import React, { useState, useEffect } from 'react';
import { Brain, Activity, Zap, Cpu, Atom, GitBranch, Shuffle, Compass } from 'lucide-react';
import { DashboardItem, ProgressBar, PredictionDisplay } from './ModalComponents';

export const NeuralInterface = () => (
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

export const QuantumPredictions = ({ getRandomPrediction }) => {
  const [latestPrediction, setLatestPrediction] = useState(getRandomPrediction());
  const [quantumForecast, setQuantumForecast] = useState(getRandomPrediction());
  
  useEffect(() => {
    const latestPredictionInterval = setInterval(() => {
      setLatestPrediction(getRandomPrediction());
    }, 10000);

    const quantumForecastInterval = setInterval(() => {
      setQuantumForecast(getRandomPrediction());
    }, 15000);

    return () => {
      clearInterval(latestPredictionInterval);
      clearInterval(quantumForecastInterval);
    };
  }, [getRandomPrediction]);

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
      <div className="space-y-2">
        <PredictionDisplay label="Latest Quantum Prediction" prediction={latestPrediction} />
        <PredictionDisplay label="Quantum Forecast" prediction={quantumForecast} />
      </div>
    </div>
  );
};

export const TemporalAnomalies = () => (
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

export const SystemDiagnostics = () => (
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