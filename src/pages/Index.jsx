import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
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
      <div className="w-64 h-64">
        <Lottie
          animationData={require('../assets/lottie-animation.json')}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default Index;
