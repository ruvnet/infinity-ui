import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Inbox, Send, Star, AlertTriangle, Trash2, ChevronLeft, Menu, X } from 'lucide-react';

const MobileCommunications = ({ onClose }) => {
  const [activeView, setActiveView] = useState('inbox');
  const [selectedMessage, setSelectedMessage] = useState(null);

  const folders = [
    { name: 'inbox', icon: Inbox, label: 'Quantum Inbox' },
    { name: 'sent', icon: Send, label: 'Subspace Sent' },
    { name: 'starred', icon: Star, label: 'Stellar Favorites' },
    { name: 'important', icon: AlertTriangle, label: 'Critical Transmissions' },
    { name: 'trash', icon: Trash2, label: 'Void Disposal' },
  ];

  const messages = [
    { id: 1, from: 'Galactic Council', subject: 'Urgent: Hyperspace Lane Closure', content: 'Due to unexpected quantum fluctuations, the Orion-Cygnus hyperspace lane will be closed for the next 72 standard hours.' },
    { id: 2, from: 'Quantum AI', subject: 'Anomaly Detected in Sector 7G', content: 'Our quantum sensors have detected an unusual subspace distortion in Sector 7G. Initial analysis suggests a possible interdimensional rift.' },
    { id: 3, from: 'Time Patrol', subject: 'Temporal Incursion Alert', content: 'Multiple timeline alterations detected in the Centauri system. Chrono-agents are being dispatched to stabilize the temporal flux.' },
  ];

  const renderFolderList = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-[#b73616] h-full rounded-lg overflow-hidden"
    >
      {folders.map((folder) => (
        <button
          key={folder.name}
          onClick={() => setActiveView(folder.name)}
          className="w-full text-left p-4 border-b border-[#ffd0a8]/20 flex items-center space-x-3 hover:bg-[#ffd0a8]/10 transition-colors"
        >
          <folder.icon size={20} className="text-[#ffd0a8]" />
          <span className="text-[#ffd0a8]">{folder.label}</span>
        </button>
      ))}
    </motion.div>
  );

  const renderMessageList = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-[#b73616] h-full rounded-lg overflow-hidden"
    >
      <div className="flex items-center justify-between p-4 border-b border-[#ffd0a8]/20">
        <button onClick={() => setActiveView('folders')} className="text-[#ffd0a8]">
          <Menu size={24} />
        </button>
        <h2 className="text-[#ffd0a8] text-lg font-semibold">{folders.find(f => f.name === activeView)?.label}</h2>
        <div className="w-6"></div>
      </div>
      {messages.map((message) => (
        <button
          key={message.id}
          onClick={() => setSelectedMessage(message)}
          className="w-full text-left p-4 border-b border-[#ffd0a8]/20 hover:bg-[#ffd0a8]/10 transition-colors"
        >
          <div className="font-semibold text-[#ffd0a8]">{message.from}</div>
          <div className="text-[#ffd0a8]/80">{message.subject}</div>
        </button>
      ))}
    </motion.div>
  );

  const renderMessageContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-[#b73616] h-full flex flex-col rounded-lg overflow-hidden"
    >
      <div className="flex items-center p-4 border-b border-[#ffd0a8]/20">
        <button onClick={() => setSelectedMessage(null)} className="text-[#ffd0a8] mr-4">
          <ChevronLeft size={24} />
        </button>
        <div>
          <h2 className="text-[#ffd0a8] font-semibold">{selectedMessage.subject}</h2>
          <div className="text-[#ffd0a8]/80 text-sm">{selectedMessage.from}</div>
        </div>
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        <p className="text-[#ffd0a8]">{selectedMessage.content}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="h-[80vh] w-[90vw] max-w-md bg-[#b73616] text-[#ffd0a8] rounded-lg overflow-hidden relative">
      <button onClick={onClose} className="absolute top-2 right-2 text-[#ffd0a8] hover:text-white transition-colors z-10">
        <X size={24} />
      </button>
      {activeView === 'folders' && renderFolderList()}
      {activeView !== 'folders' && !selectedMessage && renderMessageList()}
      {selectedMessage && renderMessageContent()}
    </div>
  );
};

export default MobileCommunications;
