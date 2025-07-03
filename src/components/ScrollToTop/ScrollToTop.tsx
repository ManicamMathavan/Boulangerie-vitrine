import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import style from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher/masquer le bouton en fonction du scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={style.scrollToTopButton}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "#8B4513",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Retour en haut de la page"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12H8V20H16V12H20L12 4Z"
              fill="currentColor"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
