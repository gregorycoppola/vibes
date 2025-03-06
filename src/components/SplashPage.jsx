import { useState, useEffect } from 'react';

const SplashPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const TRANSITION_TIME = 2000; // 2 seconds in milliseconds
  const TOTAL_IMAGES = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === TOTAL_IMAGES ? 1 : prevIndex + 1
      );
    }, TRANSITION_TIME);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img 
        src={`/images/logo-image-sequence/${currentImageIndex}.jpg`}
        alt="Logo Animation"
        style={{
          height: '100vh',
          width: '100vw',
          objectFit: 'contain',
          transition: `opacity ${TRANSITION_TIME}ms ease-in-out`,
        }}
      />
    </div>
  );
};

export default SplashPage; 