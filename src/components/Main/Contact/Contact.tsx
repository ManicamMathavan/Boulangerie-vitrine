import { motion } from 'framer-motion';
import MailLogo from "../../../assets/mail.tsx";
import Position from "../../../assets/position.tsx";
import Telephone from "../../../assets/telephone.tsx";
import style from "./Contact.module.css";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={style.contact}>
      <div className={style.container}>
        {/* Titre principal */}
        <motion.div
          className={style.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={style.title}>Nous contacter</h2>
          <p className={style.subtitle}>Venez nous rendre visite dans notre boulangerie artisanale</p>
        </motion.div>

        {/* Informations de contact */}
        <motion.div 
          className={style.contactGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className={style.contactCard}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className={style.iconWrapper}>
              <Position width={40} height={40} />
            </div>
            <div className={style.contactInfo}>
              <h3>Notre adresse</h3>
              <p>12 rue de la Boulange<br />38000 Grenoble</p>
            </div>
          </motion.div>

          <motion.div 
            className={style.contactCard}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className={style.iconWrapper}>
              <Telephone width={40} height={40} />
            </div>
            <div className={style.contactInfo}>
              <h3>Téléphone</h3>
              <p>05 56 56 56 56<br />Du lundi au samedi</p>
            </div>
          </motion.div>

          <motion.div 
            className={style.contactCard}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className={style.iconWrapper}>
              <MailLogo width={40} height={40} />
            </div>
            <div className={style.contactInfo}>
              <h3>Email</h3>
              <p>pierre.dego@boulangerie.fr<br />Réponse sous 24h</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Horaires d'ouverture */}
        <motion.div
          className={style.hoursCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3>Horaires d'ouverture</h3>
          <div className={style.hoursGrid}>
            <div className={style.dayHours}>
              <span className={style.day}>Lundi - Samedi</span>
              <span className={style.hours}>6h30 - 19h30</span>
            </div>
            <div className={style.dayHours}>
              <span className={style.day}>Dimanche</span>
              <span className={style.hours}>Fermé</span>
            </div>
          </div>
        </motion.div>

        {/* Carte Google Maps */}
        <motion.div
          className={style.mapContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11247.83107092787!2d5.7150635152959905!3d45.18795113712885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s12%20rue%20de%20la%20Boulange%2C%2038000%20Grenoble!5e0!3m2!1sfr!2sfr!4v1751456840601!5m2!1sfr!2sfr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation de la boulangerie artisanale"
          />
        </motion.div>

        {/* Bouton d'action */}
        <motion.div
          className={style.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button 
            className={style.ctaButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Nous écrire
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default Contact;
