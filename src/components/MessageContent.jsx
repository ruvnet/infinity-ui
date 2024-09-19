import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const MessageContent = ({ selectedMessage, setSelectedMessage }) => (
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

export default MessageContent;