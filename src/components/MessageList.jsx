import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const messages = [
  { id: 1, from: 'Galactic Council', subject: 'Urgent: Hyperspace Lane Closure', read: false },
  { id: 2, from: 'Quantum AI', subject: 'Anomaly Detected in Sector 7G', read: true },
  { id: 3, from: 'Time Patrol', subject: 'Temporal Incursion Alert', read: false },
];

const MessageList = ({ activeView, setActiveView, setSelectedMessage, folders }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    className="bg-[#b73616] h-full rounded-lg overflow-hidden flex flex-col"
  >
    <div className="flex items-center justify-between p-4 border-b border-[#ffd0a8]/20">
      <button onClick={() => setActiveView('folders')} className="text-[#ffd0a8]">
        <Menu size={24} />
      </button>
      <h2 className="text-[#ffd0a8] text-lg font-semibold">{folders.find(f => f.name === activeView)?.label}</h2>
      <div className="w-6"></div>
    </div>
    <div className="flex-grow overflow-y-auto">
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
    </div>
  </motion.div>
);

export default MessageList;