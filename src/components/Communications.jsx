import React, { useState } from 'react';
import { Inbox, Send, Plus, Star, AlertTriangle, Trash2 } from 'lucide-react';

const sciFiMessages = [
  { id: 1, from: 'Galactic Council', subject: 'Urgent: Hyperspace Lane Closure', read: false, content: 'Due to unexpected quantum fluctuations, the Orion-Cygnus hyperspace lane will be closed for the next 72 standard hours. All interstellar traffic must reroute through the Sagittarius bypass. Expect delays and increased fuel consumption.' },
  { id: 2, from: 'Quantum AI', subject: 'Anomaly Detected in Sector 7G', read: true, content: 'Our quantum sensors have detected an unusual subspace distortion in Sector 7G. Initial analysis suggests a possible interdimensional rift. Recommend dispatching a science vessel for further investigation.' },
  { id: 3, from: 'Time Patrol', subject: 'Temporal Incursion Alert', read: false, content: 'Multiple timeline alterations detected in the Centauri system. Chrono-agents are being dispatched to stabilize the temporal flux. All time-sensitive operations in the affected area must cease immediately.' },
  { id: 4, from: 'Xenobiology Lab', subject: 'New Lifeform Discovery', read: true, content: 'Expedition team on exoplanet KOI-4878b has encountered a silicon-based lifeform exhibiting signs of collective intelligence. Preliminary scans indicate potential for advanced communication. Awaiting first contact protocols.' },
  { id: 5, from: 'Starship Nexus', subject: 'Warp Core Upgrade Available', read: false, content: 'The latest quantum singularity drive is now available for installation. This upgrade promises a 15% increase in warp speed capabilities and a 30% reduction in tachyon emissions. Schedule your starship for refit at your earliest convenience.' },
  { id: 6, from: 'Interstellar Trade Federation', subject: 'Market Alert: Dilithium Crystal Shortage', read: false, content: 'Recent supernova activity in the Mutara Nebula has disrupted dilithium mining operations. Expect a 300% price increase in the next solar cycle. Consider alternative energy sources for non-critical systems.' },
  { id: 7, from: 'Psionic Research Institute', subject: 'Breakthrough in Telepathic Encryption', read: true, content: 'Our team has successfully developed a method to encrypt data using psionic wavelengths. This technology promises unbreakable communication channels. Volunteers needed for beta testing. Warning: May cause mild headaches and temporary telepathic sensitivity.' },
  { id: 8, from: 'Galactic Archives', subject: 'Ancient Artifact Discovered', read: false, content: 'Archaeologists on Zeta Reticuli IV have unearthed a device of unknown origin. Preliminary scans suggest it may be a map to a long-lost civilization. All qualified xenoarchaeologists are requested to join the research team immediately.' },
  { id: 9, from: 'Cybernetic Enhancements Corp', subject: 'Recall Notice: Neural Implant Series X-1000', read: true, content: 'A critical bug has been detected in the X-1000 series neural implants. Users may experience unintended synaptic connections and spontaneous knowledge downloads. Please schedule an appointment for an immediate firmware update.' },
  { id: 10, from: 'Planetary Defense Network', subject: 'Simulation Results: Asteroid Deflection', read: false, content: 'Recent simulations of our planetary defense systems show a 12% failure rate in deflecting extinction-level asteroid impacts. Proposal to upgrade to quantum-guided missile systems is pending approval. Your vote is required within 48 hours.' },
];

const sciFiRecipients = [
  'Galactic Council',
  'Quantum AI',
  'Time Patrol',
  'Xenobiology Lab',
  'Starship Nexus',
  'Interstellar Trade Federation',
  'Psionic Research Institute',
  'Galactic Archives',
  'Cybernetic Enhancements Corp',
  'Planetary Defense Network',
];

export const Communications = () => {
  const [activeFolder, setActiveFolder] = useState('inbox');
  const [messages, setMessages] = useState(sciFiMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);

  const folders = [
    { name: 'inbox', icon: Inbox, label: 'Quantum Inbox' },
    { name: 'sent', icon: Send, label: 'Subspace Sent' },
    { name: 'starred', icon: Star, label: 'Stellar Favorites' },
    { name: 'important', icon: AlertTriangle, label: 'Critical Transmissions' },
    { name: 'trash', icon: Trash2, label: 'Void Disposal' },
  ];

  const filteredMessages = messages.filter(message => {
    if (activeFolder === 'inbox') return !message.sent;
    if (activeFolder === 'sent') return message.sent;
    return false;
  });

  return (
    <div className="flex h-[70vh]">
      {/* Left sidebar */}
      <div className="w-1/4 bg-[#b73616]/30 p-4 rounded-l-lg">
        <button
          onClick={() => setShowNewMessage(true)}
          className="w-full bg-[#ffd0a8] text-[#b73616] rounded-md py-2 mb-4 flex items-center justify-center"
        >
          <Plus size={16} className="mr-2" />
          New Transmission
        </button>
        {folders.map((folder) => (
          <button
            key={folder.name}
            onClick={() => setActiveFolder(folder.name)}
            className={`w-full text-left mb-2 p-2 rounded-md flex items-center ${
              activeFolder === folder.name ? 'bg-[#ffd0a8]/20' : ''
            }`}
          >
            <folder.icon size={16} className="mr-2" />
            {folder.label}
          </button>
        ))}
      </div>

      {/* Message list */}
      <div className="w-1/3 bg-[#b73616]/20 p-4 overflow-y-auto">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            onClick={() => setSelectedMessage(message)}
            className={`p-2 mb-2 rounded-md cursor-pointer ${
              message === selectedMessage ? 'bg-[#ffd0a8]/20' : ''
            }`}
          >
            <div className="font-bold">{message.from}</div>
            <div className="text-sm opacity-70">{message.subject}</div>
          </div>
        ))}
      </div>

      {/* Message content */}
      <div className="w-5/12 bg-[#b73616]/10 p-4 rounded-r-lg">
        {selectedMessage ? (
          <div>
            <h3 className="text-xl font-bold mb-2">{selectedMessage.subject}</h3>
            <p className="mb-4">From: {selectedMessage.from}</p>
            <p>{selectedMessage.content}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-[#ffd0a8]/50">
            Select a transmission to view its contents
          </div>
        )}
      </div>

      {/* New message form */}
      {showNewMessage && (
        <div className="absolute inset-0 bg-[#b73616]/90 flex items-center justify-center">
          <div className="bg-[#b73616] p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">New Transmission</h3>
            <select className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-2 mb-4">
              {sciFiRecipients.map((recipient, index) => (
                <option key={index} value={recipient}>{recipient}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-2 mb-4"
            />
            <textarea
              placeholder="Message content"
              className="w-full bg-[#b73616] text-[#ffd0a8] border border-[#ffd0a8] rounded p-2 mb-4"
              rows="5"
            ></textarea>
            <div className="flex justify-between">
              <button
                onClick={() => setShowNewMessage(false)}
                className="bg-[#ffd0a8] text-[#b73616] px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Here you would typically send the message
                  setShowNewMessage(false);
                }}
                className="bg-[#ffd0a8] text-[#b73616] px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
