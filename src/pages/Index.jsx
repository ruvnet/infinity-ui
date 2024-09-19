import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#c34524] text-[#ffd0a8]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;
