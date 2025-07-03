//Presentation.tsx 

import { motion } from "framer-motion";
import interieur from "../../../assets/webp/interieur.webp";
import OptimizedImage from "../../OptimizedImage/OptimizedImage";
import style from "./Presentation.module.css";

function About() {
  const handleContactClick = () => {
    // Action pour plus tard quand on créera la page contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className={style.presentation}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={style.backgroundImage}>
        <OptimizedImage 
          src={interieur} 
          alt="Intérieur chaleureux de notre boulangerie artisanale"
          priority={true}
        />
      </div>
      
      <div className={style.overlay}></div>
      
      <motion.div 
        className={style.content}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Du pain fait avec passion depuis 1954
        </motion.h1>
        
        <motion.button
          className={style.ctaButton}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.01, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={handleContactClick}
        >
          Nous contacter
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default About;