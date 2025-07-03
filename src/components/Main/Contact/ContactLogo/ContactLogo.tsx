import { motion } from 'framer-motion';
import type { ReactElement, ReactNode } from "react";
import style from "./ContactLogo.module.css";

function ContactLogo({Logo, children} : {Logo: ReactNode , children:ReactNode}): ReactElement {
  return (
    <motion.div 
      className={style.logoWithText}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >  
      <motion.div 
        className={style.logo}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ 
          rotate: 5,
          transition: { duration: 0.2 }
        }}
      >
        {Logo}
      </motion.div>
      <motion.h2 
        className="imgDescription pProperty"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {children}
      </motion.h2>
    </motion.div>
  );
}
export default ContactLogo;