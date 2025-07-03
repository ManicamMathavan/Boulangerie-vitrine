import { useEffect } from 'react';

// Composant pour gérer le viewport et éviter les problèmes de zoom sur mobile
const ViewportManager: React.FC = () => {
  useEffect(() => {
    // Correction du viewport pour éviter le zoom initial sur mobile
    const handleViewportChange = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        // Configuration optimale pour éviter les problèmes de zoom
        viewport.setAttribute(
          'content', 
          'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
        );
      }
    };

    // Prévention du zoom sur les inputs sur iOS
    const preventZoomOnInputs = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('touchstart', () => {
          const viewport = document.querySelector('meta[name="viewport"]');
          if (viewport) {
            viewport.setAttribute(
              'content', 
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            );
          }
        });

        input.addEventListener('blur', () => {
          const viewport = document.querySelector('meta[name="viewport"]');
          if (viewport) {
            viewport.setAttribute(
              'content', 
              'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
            );
          }
        });
      });
    };

    // Correction du 100vh sur mobile
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initialisation
    handleViewportChange();
    preventZoomOnInputs();
    setViewportHeight();

    // Écoute des changements d'orientation
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', () => {
      setTimeout(setViewportHeight, 100);
    });

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  return null;
};

export default ViewportManager;
