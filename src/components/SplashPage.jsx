import { useState, useEffect } from 'react';

const SplashPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const DISPLAY_TIME = 5000; // 5 seconds between image changes
  const FADE_DURATION = 1000; // 1 second fade transition
  const TOTAL_IMAGES = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out, change image and fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === TOTAL_IMAGES ? 1 : prevIndex + 1
        );
        setIsVisible(true);
      }, FADE_DURATION);
    }, DISPLAY_TIME);

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
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
        }}
      />
    </div>
  );
};

export default SplashPage; 