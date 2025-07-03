import { motion, type Variants } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import style from './PiedDePage.module.css';

function PiedDePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      className={style.piedDePage}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={style.container}>
        <motion.div 
          className={style.content}
          variants={itemVariants}
        >
          <h2 className={style.accroche}>
            Ce site vous plaît ?
          </h2>
          <h3 className={style.sousAccroche}>
            Faites le vôtre dès maintenant !
          </h3>
          
          <motion.button
            className={style.ctaButton}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Demander un site comme celui-ci
          </motion.button>
        </motion.div>

        <motion.div 
          className={style.socialSection}
          variants={itemVariants}
        >
          <p className={style.socialText}>Suivez-nous</p>
          <div className={style.socialIcons}>
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIcon 
                url="https://www.instagram.com/boulangerie-dego" 
                style={{ width: 50, height: 50 }}
                target="_blank"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIcon 
                url="https://x.com/boulangerie-dego" 
                style={{ width: 50, height: 50 }}
                target="_blank"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PiedDePage;
