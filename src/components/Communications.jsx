import React, { useState } from 'react';
import { Radio, Inbox, Send, Plus, Zap } from 'lucide-react';
import { DashboardItem, ProgressBar } from './ModalComponents';

const sciFiMessages = [
  { id: 1, from: 'Galactic Council', subject: 'Urgent: Hyperspace Lane Closure', read: false },
  { id: 2, from: 'Quantum AI', subject: 'Anomaly Detected in Sector 7G', read: true },
  { id: 3, from: 'Time Patrol', subject: 'Temporal Incursion Alert', read: false },
  { id: 4, from: 'Xenobiology Lab', subject: 'New Lifeform Discovery', read: true },
  { id: 5, from: 'Starship Nexus', subject: 'Warp Core Upgrade Available', read: false },
];

const sciFiRecipients = [
  'Galactic Council',
  'Quantum AI',
  'Time Patrol',
  'Xenobiology Lab',
  'Starship Nexus',
  'Interstellar Trade Federation',
  'Psionic Research Institute',
];

export const Communications = () => {
  const [messages, setMessages] = useState(sciFiMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);

  const getMessageContent = (subject) => {
    const contents = {
      'Urgent: Hyperspace Lane Closure': 'Due to unexpected quantum fluctuations, the Orion-Cygnus hyperspace lane will be closed for the next 72 standard hours. All interstellar traffic must reroute through the Sagittarius bypass. Expect delays and increased fuel consumption.',
      'Anomaly Detected in Sector 7G': 'Our quantum sensors have detected an unusual subspace distortion in Sector 7G. Initial analysis suggests a possible interdimensional rift. Recommend dispatching a science vessel for further investigation.',
      'Temporal Incursion Alert': 'Multiple timeline alterations detected in the Centauri system. Chrono-agents are being dispatched to stabilize the temporal flux. All time-sensitive operations in the affected area must cease immediately.',
      'New Lifeform Discovery': 'Expedition team on exoplanet KOI-4878b has encountered a silicon-based lifeform exhibiting signs of collective intelligence. Preliminary scans indicate potential for advanced communication. Awaiting first contact protocols.',
      'Warp Core Upgrade Available': 'The latest quantum singularity drive is now available for installation. This upgrade promises a 15% increase in warp speed capabilities and a 30% reduction in tachyon emissions. Schedule your starship for refit at your earliest convenience.'
    };
    return contents[subject] || 'Message content unavailable.';
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <DashboardItem icon={Radio} label="Subspace Link" value="Active" />
        <DashboardItem icon={Inbox} label="Unread Transmissions" value={messages.filter(m => !m.read).length} />
        <DashboardItem icon={Send} label="Outgoing Queue" value="2" />
        <DashboardItem icon={Zap} label="Quantum Encryption" value="99.9%" />
      </div>
      <ProgressBar label="Tachyon Bandwidth" value={87} max={100} />
      <div className="mt-4 bg-[#b73616]/30 p-3 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[#ffd0a8] text-sm font-semibold">Interstellar Inbox</div>
          <button onClick={() => setShowNewMessage(true)} className="text-[#ffd0a8] hover:text-white transition-colors">
            <Plus size={20} />
          </button>
        </div>
        {showNewMessage ? (
          <div className="space-y-2">
            <select className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-1">
              {sciFiRecipients.map((recipient, index) => (
                <option key={index} value={recipient}>{recipient}</option>
              ))}
            </select>
            <input type="text" placeholder="Transmission Subject" className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-1" />
            <textarea placeholder="Compose Transmission" className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-1" rows="3"></textarea>
            <button className="bg-[#ffd0a8] text-[#b73616] px-2 py-1 rounded hover:bg-[#ffd0a8]/80 transition-colors">Transmit</button>
          </div>
        ) : (
          <div className="space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                  message.read ? 'bg-[#b73616]/20' : 'bg-[#ffd0a8]/20'
                }`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="text-[#ffd0a8] text-sm">{message.from}</div>
                <div className="text-[#ffd0a8] text-xs opacity-70">{message.subject}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedMessage && (
        <div className="mt-4 bg-[#b73616]/30 p-3 rounded-lg">
          <div className="text-[#ffd0a8] text-sm font-semibold mb-2">{selectedMessage.subject}</div>
          <div className="text-[#ffd0a8] text-xs opacity-70 mb-2">From: {selectedMessage.from}</div>
          <div className="text-[#ffd0a8] text-sm">
            {getMessageContent(selectedMessage.subject)}
          </div>
        </div>
      )}
    </div>
  );
};