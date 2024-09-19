import React, { useState } from 'react';
import { Inbox, Send, Plus, Star, AlertTriangle, Trash2, X, Reply } from 'lucide-react';

const sciFiMessages = [
  { id: 1, from: 'Galactic Council', subject: 'Urgent: Hyperspace Lane Closure', read: false, content: 'Due to unexpected quantum fluctuations, the Orion-Cygnus hyperspace lane will be closed for the next 72 standard hours. All interstellar traffic must reroute through the Sagittarius bypass. Expect delays and increased fuel consumption.' },
  { id: 2, from: 'Quantum AI', subject: 'Anomaly Detected in Sector 7G', read: true, content: 'Our quantum sensors have detected an unusual subspace distortion in Sector 7G. Initial analysis suggests a possible interdimensional rift. Recommend dispatching a science vessel for further investigation.' },
  { id: 3, from: 'Time Patrol', subject: 'Temporal Incursion Alert', read: false, content: 'Multiple timeline alterations detected in the Centauri system. Chrono-agents are being dispatched to stabilize the temporal flux. All time-sensitive operations in the affected area must cease immediately.' },
  { id: 4, from: 'Xenobiology Lab', subject: 'New Lifeform Discovery', read: true, content: 'Expedition team on exoplanet KOI-4878b has encountered a silicon-based lifeform exhibiting signs of collective intelligence. Preliminary scans indicate potential for advanced communication. Awaiting first contact protocols.' },
  { id: 5, from: 'Starship Nexus', subject: 'Warp Core Upgrade Available', read: false, content: 'The latest quantum singularity drive is now available for installation. This upgrade promises a 15% increase in warp speed capabilities and a 30% reduction in tachyon emissions. Schedule your starship for refit at your earliest convenience.' },
];

const sentMessages = [
  { id: 11, to: 'Galactic Council', subject: 'Re: Hyperspace Lane Closure', content: 'Acknowledged. Rerouting all scheduled transports. Requesting additional fuel allocation for extended journeys.' },
  { id: 12, to: 'Quantum AI', subject: 'Authorization for Sector 7G Investigation', content: 'Permission granted to dispatch science vessel Curiosity-9 to investigate the subspace distortion. Maintain constant communication and implement full quarantine protocols.' },
  { id: 13, to: 'Time Patrol', subject: 'Support Request: Temporal Stabilization', content: 'Offering assistance from our Chronos Division. Standing by with temporal shielding equipment and paradox resolution specialists.' },
];

const starredMessages = [
  { id: 14, from: 'Intergalactic Library', subject: 'Rare Manuscript Found', read: true, content: 'A copy of "Quantum Mechanics for Multidimensional Beings" has been discovered in the ruins of Atlantis. Reserve your digital copy now.' },
  { id: 15, from: 'Galactic Peace Corps', subject: 'Volunteer Opportunity: Diplomatic Mission', read: true, content: 'Seeking skilled negotiators for a delicate diplomatic mission to the Andromeda Galaxy. Must be proficient in at least 5000 alien languages and immune to psychic manipulation.' },
];

const criticalMessages = [
  { id: 16, from: 'Planetary Defense Network', subject: 'URGENT: Incoming Asteroid Swarm', read: false, content: 'Multiple extinction-level asteroids detected on collision course. Planetary shield activation required immediately. This is not a drill.' },
  { id: 17, from: 'Quantum Containment Facility', subject: 'CRITICAL: Antimatter Leak Detected', read: false, content: 'Containment breach in Sector 31. Antimatter leak spreading. Evacuation of all non-essential personnel required. Quantum stabilizers at critical levels.' },
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
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [folders, setFolders] = useState([
    { name: 'inbox', icon: Inbox, label: 'Quantum Inbox', messages: sciFiMessages },
    { name: 'sent', icon: Send, label: 'Subspace Sent', messages: sentMessages },
    { name: 'starred', icon: Star, label: 'Stellar Favorites', messages: starredMessages },
    { name: 'important', icon: AlertTriangle, label: 'Critical Transmissions', messages: criticalMessages },
    { name: 'trash', icon: Trash2, label: 'Void Disposal', messages: [] },
  ]);

  const currentFolder = folders.find(folder => folder.name === activeFolder);

  const handleDelete = (messageId) => {
    const updatedFolders = folders.map(folder => {
      if (folder.name === activeFolder) {
        const messageToDelete = folder.messages.find(msg => msg.id === messageId);
        const updatedMessages = folder.messages.filter(msg => msg.id !== messageId);
        return { ...folder, messages: updatedMessages };
      } else if (folder.name === 'trash') {
        return { ...folder, messages: [...folder.messages, folders.find(f => f.name === activeFolder).messages.find(msg => msg.id === messageId)] };
      }
      return folder;
    });
    setFolders(updatedFolders);
    setSelectedMessage(null);
  };

  const handleReply = (message) => {
    const newMessage = {
      id: Date.now(),
      from: 'You',
      to: message.from,
      subject: `RE: ${message.subject}`,
      content: `Replying to: "${message.content}"\n\nYour reply here...`,
      read: true
    };
    const updatedFolders = folders.map(folder => {
      if (folder.name === 'inbox') {
        return { ...folder, messages: [newMessage, ...folder.messages] };
      }
      return folder;
    });
    setFolders(updatedFolders);
    setShowNewMessage(true);
    setSelectedMessage(newMessage);
  };

  const handleSendMessage = (to, subject, content) => {
    const newMessage = {
      id: Date.now(),
      from: 'You',
      to,
      subject,
      content,
      read: true
    };
    const updatedFolders = folders.map(folder => {
      if (folder.name === 'sent') {
        return { ...folder, messages: [newMessage, ...folder.messages] };
      }
      return folder;
    });
    setFolders(updatedFolders);
    setShowNewMessage(false);
  };

  return (
    <div className="flex h-[70vh]">
      {/* Left sidebar */}
      <div className="w-1/4 bg-[#b73616]/30 p-4 rounded-l-lg overflow-y-auto" style={{ scrollbarColor: '#f8d2ad #b73616' }}>
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
            onClick={() => {
              setActiveFolder(folder.name);
              setSelectedMessage(null);
            }}
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
      <div className="w-1/3 bg-[#b73616]/20 p-4 overflow-y-auto" style={{ scrollbarColor: '#f8d2ad #b73616' }}>
        {currentFolder.messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 mb-2 rounded-md cursor-pointer flex justify-between items-center ${
              message === selectedMessage ? 'bg-[#ffd0a8]/20' : ''
            }`}
          >
            <div onClick={() => setSelectedMessage(message)} className="flex-grow">
              <div className="font-bold">{message.from || message.to}</div>
              <div className="text-sm opacity-70">{message.subject}</div>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleReply(message)} className="text-[#ffd0a8] hover:text-white">
                <Reply size={16} />
              </button>
              <button onClick={() => handleDelete(message.id)} className="text-[#ffd0a8] hover:text-white">
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Message content */}
      <div className="w-5/12 bg-[#b73616]/10 p-4 rounded-r-lg overflow-y-auto" style={{ scrollbarColor: '#f8d2ad #b73616' }}>
        {selectedMessage ? (
          <div>
            <h3 className="text-xl font-bold mb-2">{selectedMessage.subject}</h3>
            <p className="mb-4">{selectedMessage.from ? `From: ${selectedMessage.from}` : `To: ${selectedMessage.to}`}</p>
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
                  const to = document.querySelector('select').value;
                  const subject = document.querySelector('input[type="text"]').value;
                  const content = document.querySelector('textarea').value;
                  handleSendMessage(to, subject, content);
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
