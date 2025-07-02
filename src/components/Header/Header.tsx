import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import style from './Header.module.css';
import logo from '../../assets/logo.png' // Import SVG logo

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['Accueil', 'Nos produits', 'À propos'];

  return (
    <>
      <motion.header 
        className={style.header}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }}
      >
        <div className={style.leftContent}>
          <motion.img 
            src={logo}
            alt="Logo boulangerie Dego"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            decoding="async"
            loading="lazy"
          />
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            La boulangerie Dego
          </motion.h2>
        </div>

        {/* Menu desktop */}
        <motion.div 
          className={style.rightContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {menuItems.map((item) => (
            <motion.p
              key={item}
              whileHover={{ scale: 1.03, color: "#8B4513" }}
              transition={{ duration: 0.15 }}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>

        {/* Menu hamburger */}
        <motion.div 
          className={`${style.hamburger} ${isMenuOpen ? style.active : ''}`}
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`${style.mobileMenu} ${isMenuOpen ? style.open : ''}`}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menuItems.map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, color: "#8B4513" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  // Ici on peut ajouter la logique pour naviguer vers la section correspondante
                    console.log(`Naviguer vers ${item}`);
                }}
                style={{ cursor: 'pointer' }}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;