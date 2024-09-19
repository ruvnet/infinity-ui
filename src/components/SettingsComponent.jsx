import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Key, Cpu } from 'lucide-react';

const SettingsComponent = () => {
  const [openAIKey, setOpenAIKey] = useState('');
  const [deepgramKey, setDeepgramKey] = useState('');

  const handleSave = () => {
    // Here you would typically save these keys to a secure storage
    console.log('Saving keys:', { openAIKey, deepgramKey });
    // You might want to add some visual feedback here
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#b73616]/30 p-4 rounded-lg"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Key className="mr-2" /> API Configuration
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="openai-key" className="block text-sm font-medium mb-1">
              OpenAI API Key
            </label>
            <input
              id="openai-key"
              type="password"
              value={openAIKey}
              onChange={(e) => setOpenAIKey(e.target.value)}
              className="w-full bg-[#b73616]/20 border border-[#ffd0a8]/30 rounded-md p-2 text-[#ffd0a8]"
              placeholder="Enter OpenAI API Key"
            />
          </div>
          <div>
            <label htmlFor="deepgram-key" className="block text-sm font-medium mb-1">
              Deepgram API Key
            </label>
            <input
              id="deepgram-key"
              type="password"
              value={deepgramKey}
              onChange={(e) => setDeepgramKey(e.target.value)}
              className="w-full bg-[#b73616]/20 border border-[#ffd0a8]/30 rounded-md p-2 text-[#ffd0a8]"
              placeholder="Enter Deepgram API Key"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#b73616]/30 p-4 rounded-lg"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Cpu className="mr-2" /> System Configuration
        </h3>
        <p className="text-sm opacity-70">
          Advanced system settings and configurations will be available in future updates.
        </p>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={handleSave}
        className="w-full bg-[#ffd0a8] text-[#b73616] py-2 rounded-md hover:bg-[#ffd0a8]/90 transition-colors"
      >
        Save Configuration
      </motion.button>
    </div>
  );
};

export default SettingsComponent;