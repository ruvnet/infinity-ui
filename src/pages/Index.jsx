import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import HamburgerMenu from '../components/HamburgerMenu';
import { createClient } from '@deepgram/sdk';

const loadingStatements = [
  "Initializing quantum processors...",
  "Calibrating neural networks...",
  "Synchronizing with deep space probes...",
  "Decoding alien transmissions...",
  "Preparing for interstellar journey...",
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStatement, setCurrentStatement] = useState(0);
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const statementInterval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % loadingStatements.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(statementInterval);
    };
  }, []);

  useEffect(() => {
    const deepgramApiKey = import.meta.env.VITE_DEEPGRAM_API_KEY;

    if (!deepgramApiKey) {
      setError('Deepgram API key is not set. Please check your environment variables.');
      return;
    }

    const deepgram = createClient(deepgramApiKey);

    const fetchTranscription = async () => {
      try {
        const { result } = await deepgram.listen.prerecorded.transcribeUrl({
          url: 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav',
        });
        setTranscription(result.channels[0].alternatives[0].transcript);
      } catch (err) {
        console.error('Error fetching transcription:', err);
        setError('Failed to fetch transcription. Please try again later.');
      }
    };

    fetchTranscription();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-[#ff4500] relative">
      <div className="absolute top-4 right-4">
        <HamburgerMenu />
      </div>
      <div className="text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 rounded-full bg-[#ff4500]/10 border-4 border-[#ff4500] flex items-center justify-center mb-8"
        >
          <span className="text-4xl font-bold">HAL</span>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStatement}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-lg font-mono tracking-wider max-w-md text-center"
          >
            {loadingStatements[currentStatement]}
          </motion.div>
        </AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-500 text-sm"
          >
            {error}
          </motion.div>
        )}
        {transcription && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-[#ff4500] text-sm max-w-md"
          >
            <h3 className="font-bold mb-2">Transcription:</h3>
            <p>{transcription}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;
