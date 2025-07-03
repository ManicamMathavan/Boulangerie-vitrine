import { motion } from 'framer-motion';
import pate from "../../../assets/webp/pate.webp";
import style from "./About.module.css";

function About() {
  return (
    <motion.section 
      className={style.about}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={style.imageContainer}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img 
          src={pate} 
          alt="Artisan boulanger travaillant la pâte"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <motion.div 
        className={style.aboutContent}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          À Propos
        </motion.h1>
        
        <motion.p 
          className="pProperty"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Depuis plus de vingt ans, la boulangerie Dego perpétue une tradition
          familiale passionnée par l'art du pain. Fondée au cœur de notre village,
          elle est née d'un rêve : offrir des pains authentiques, préparés avec
          amour et patience. Chez Dego, chaque baguette, chaque miche est le fruit
          d'un savoir-faire artisanal transmis de génération en génération. Nous
          privilégions les ingrédients locaux, sélectionnés avec soin, pour
          soutenir nos producteurs et garantir la fraîcheur. Notre engagement est
          simple : proposer des pains savoureux, sains, qui racontent une histoire
          et réchauffent les cœurs.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default About;
