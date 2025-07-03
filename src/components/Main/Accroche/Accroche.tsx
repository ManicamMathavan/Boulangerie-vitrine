import "bootstrap/dist/css/bootstrap.min.css";
import { motion, type Variants } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import style from "./Accroche.module.css";

// Variantes d'animation pour le conteneur principal
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

// Variantes pour les éléments enfants
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variantes pour le bouton CTA
const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

// Variantes pour les icônes sociales
const socialVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

const socialIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.2,
    y: -5,
    rotate: 10,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1,
    },
  },
};

function Accroche() {
  const socialLinks = [
    { url: "https://x.com", name: "Twitter" },
    { url: "https://www.instagram.com/", name: "Instagram" },
  ];

  return (
    <section className={style.accrocheContainer} role="banner" aria-label="Section d'accroche">
      <motion.div
        className={style.accrocheContent}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={style.titleContainer} variants={itemVariants}>
          <motion.h2 
            className={style.title}
            variants={itemVariants}
          >
            Ce site vous plaît ?
          </motion.h2>
          <motion.h2 
            className={style.subtitle}
            variants={itemVariants}
          >
            Faites le vôtre dès maintenant !
          </motion.h2>
        </motion.div>

        <motion.button
          className={style.ctaButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => {
            // Action à définir selon les besoins (contact, formulaire, etc.)
            window.open("mailto:contact@example.com", "_blank");
          }}
          aria-label="Demander la création d'un site web personnalisé"
        >
          Demander un site comme celui-ci
        </motion.button>

        <motion.div 
          className={style.socialSection}
          variants={socialVariants}
        >
          <div className={style.socialIcons} role="list" aria-label="Liens vers nos réseaux sociaux">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.url}
                className={style.socialIconWrapper}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                role="listitem"
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <SocialIcon
                  url={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitez notre page ${social.name}`}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Accroche;