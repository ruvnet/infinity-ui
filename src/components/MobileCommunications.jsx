import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Inbox, Send, Star, AlertTriangle, Trash2, ChevronLeft, Menu, X, Plus, Eye, Edit, Trash, Reply } from 'lucide-react';
import MessageList from './MessageList';
import MessageContent from './MessageContent';
import NewMessageForm from './NewMessageForm';

const MobileCommunications = ({ onClose }) => {
  const [activeView, setActiveView] = useState('inbox');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);

  const folders = [
    { name: 'inbox', icon: Inbox, label: 'Quantum Inbox' },
    { name: 'sent', icon: Send, label: 'Subspace Sent' },
    { name: 'starred', icon: Star, label: 'Stellar Favorites' },
    { name: 'important', icon: AlertTriangle, label: 'Critical Transmissions' },
    { name: 'trash', icon: Trash2, label: 'Void Disposal' },
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

  const handleAction = (action) => {
    switch (action) {
      case 'new':
        setShowNewMessage(true);
        break;
      case 'view':
        // Implement view action
        break;
      case 'edit':
        // Implement edit action
        break;
      case 'delete':
        // Implement delete action
        break;
      case 'reply':
        // Implement reply action
        break;
      default:
        break;
    }
  };

  const renderActionBar = () => (
    <div className="flex justify-around items-center p-2 bg-[#b73616]/80 border-t border-[#ffd0a8]/20">
      <button onClick={() => handleAction('new')} className="text-[#ffd0a8] p-2 hover:bg-[#ffd0a8]/10 rounded-full transition-colors">
        <Plus size={16} />
      </button>
      <button onClick={() => handleAction('view')} className="text-[#ffd0a8] p-2 hover:bg-[#ffd0a8]/10 rounded-full transition-colors">
        <Eye size={16} />
      </button>
      <button onClick={() => handleAction('edit')} className="text-[#ffd0a8] p-2 hover:bg-[#ffd0a8]/10 rounded-full transition-colors">
        <Edit size={16} />
      </button>
      <button onClick={() => handleAction('delete')} className="text-[#ffd0a8] p-2 hover:bg-[#ffd0a8]/10 rounded-full transition-colors">
        <Trash size={16} />
      </button>
      {selectedMessage && (
        <button onClick={() => handleAction('reply')} className="text-[#ffd0a8] p-2 hover:bg-[#ffd0a8]/10 rounded-full transition-colors">
          <Reply size={16} />
        </button>
      )}
    </div>
  );

  return (
    <div className="h-[80vh] w-[90vw] max-w-md bg-[#b73616] text-[#ffd0a8] rounded-lg overflow-hidden relative flex flex-col">
      <button onClick={onClose} className="absolute top-2 right-2 text-[#ffd0a8] hover:text-white transition-colors z-10">
        <X size={24} />
      </button>
      <div className="flex-grow overflow-hidden flex flex-col">
        {activeView === 'folders' && renderFolderList()}
        {activeView !== 'folders' && !selectedMessage && (
          <MessageList
            activeView={activeView}
            setActiveView={setActiveView}
            setSelectedMessage={setSelectedMessage}
            folders={folders}
          />
        )}
        {selectedMessage && (
          <MessageContent
            selectedMessage={selectedMessage}
            setSelectedMessage={setSelectedMessage}
          />
        )}
        {showNewMessage && (
          <NewMessageForm
            setShowNewMessage={setShowNewMessage}
          />
        )}
      </div>
      {renderActionBar()}
    </div>
  );
};

export default MobileCommunications;
