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
      </div>
    </div>
  );
};

export default Index;
