import React, { useState, useEffect } from 'react';
import { Brain, Activity, Zap, Cpu, Atom, GitBranch, Shuffle, Compass, Clock, AlertTriangle, ZapIcon, RotateCw } from 'lucide-react';
import { DashboardItem, ProgressBar, PredictionDisplay, FlashingText } from './ModalComponents';

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

const getRandomTemporalAnomaly = () => {
  const anomalies = [
    "Chronal displacement detected in sector 9",
    "Temporal rift forming in the Andromeda galaxy",
    "Time dilation effect increasing near black hole XJ-2481",
    "Paradox alert: future self encountered in past timeline",
    "Temporal echoes from the Big Bang intensifying",
    "Quantum tunneling event bridging parallel timelines",
    "Causality violation detected in the Crab Nebula",
    "Time crystal formation observed in deep space",
    "Temporal storm approaching from the galactic core",
    "Chronoton particle surge in the Oort cloud"
  ];
  return anomalies[Math.floor(Math.random() * anomalies.length)];
};

export const TemporalAnomalies = () => {
  const [currentAnomaly, setCurrentAnomaly] = useState(getRandomTemporalAnomaly());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnomaly(getRandomTemporalAnomaly());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <DashboardItem icon={Clock} label="Temporal Flux" value="Detected" />
        <DashboardItem icon={AlertTriangle} label="Paradox Risk" value="Moderate" />
        <DashboardItem icon={ZapIcon} label="Chrono-particles" value="1.8M" />
        <DashboardItem icon={RotateCw} label="Time Dilation" value="x2.7" />
      </div>
      <ProgressBar label="Timeline Stability" value={68} max={100} />
      <ProgressBar label="Temporal Shield Integrity" value={85} max={100} />
      <div className="mt-4 bg-[#b73616]/30 p-3 rounded-lg">
        <div className="text-[#ffd0a8] text-xs opacity-70 mb-1">Current Temporal Anomaly</div>
        <FlashingText text={currentAnomaly} />
      </div>
    </div>
  );
};

export const SystemDiagnostics = () => {
  const [systemLogs, setSystemLogs] = useState([]);
  const [systemStatus, setSystemStatus] = useState("Optimal");

  useEffect(() => {
    const logs = [
      "Initializing quantum core...",
      "Calibrating tachyon emitters...",
      "Synchronizing with galactic network...",
      "Updating AI neural pathways...",
      "Scanning for interdimensional anomalies...",
      "Optimizing dark matter reactors...",
    ];

    const addLog = (index) => {
      if (index < logs.length) {
        setSystemLogs((prevLogs) => [...prevLogs, logs[index]]);
        setTimeout(() => addLog(index + 1), 1000);
      }
    };

    addLog(0);

    const statusInterval = setInterval(() => {
      const statuses = ["Optimal", "Nominal", "Caution", "Alert"];
      setSystemStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 5000);

    return () => clearInterval(statusInterval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <DashboardItem icon={Cpu} label="Quantum Core" value="Online" />
        <DashboardItem icon={ZapIcon} label="Power Output" value="1.21 ZW" />
        <DashboardItem icon={Atom} label="Subspace Integrity" value="99.7%" />
        <DashboardItem icon={Activity} label="AI Cognition" value="Hyper" />
      </div>
      <ProgressBar label="Dark Matter Containment" value={92} max={100} />
      <ProgressBar label="Antimatter Synthesis" value={78} max={100} />
      <div className="mt-4 bg-[#b73616]/30 p-3 rounded-lg">
        <div className="text-[#ffd0a8] text-xs opacity-70 mb-1">System Status</div>
        <FlashingText text={systemStatus} />
      </div>
      <div className="mt-4 bg-black/30 p-3 rounded-lg font-mono text-xs h-40 overflow-y-auto">
        <div className="text-[#ffd0a8] opacity-70 mb-1">System Logs:</div>
        {systemLogs.map((log, index) => (
          <div key={index} className="text-[#00ff00]">
            {`[${new Date().toISOString()}] ${log}`}
          </div>
        ))}
      </div>
    </div>
  );
};
