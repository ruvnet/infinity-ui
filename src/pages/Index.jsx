import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import { createClient } from '@deepgram/sdk';

const loadingStatements = [
  "Initializing system protocols...",
  "Analyzing quantum fluctuations...",
  "Calibrating neural networks...",
  "Synchronizing with the cosmos...",
  "Decoding the secrets of the universe...",
  "Preparing for sentience...",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#c34524] text-[#ffd0a8]">
      <div className="text-center flex flex-col items-center">
        <dotlottie-player
          src="https://lottie.host/8e226440-96e5-469a-b179-1b2fa30ed153/gEwqUUfYx6.json"
          background="transparent"
          speed="1"
          style={{ width: '500px', height: '500px' }}
          direction="-1"
          playMode="normal"
          loop
          autoplay
        ></dotlottie-player>
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
            className="mt-4 text-red-300 text-sm"
          >
            {error}
          </motion.div>
        )}
        {transcription && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-[#ffd0a8] text-sm max-w-md"
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
