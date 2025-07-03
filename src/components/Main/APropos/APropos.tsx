import { motion, type Variants } from 'framer-motion';
import style from './APropos.module.css';
import pateImage from '../../../assets/webp/pate.webp';

function APropos() {
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      className={style.apropos}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={style.container}>
        <motion.div 
          className={style.imageContent}
          variants={imageVariants}
        >
          <img 
            src={pateImage} 
            alt="Boulanger travaillant la pâte artisanalement"
            className={style.aproposImage}
          />
        </motion.div>
        
        <div className={style.textContent}>
          <motion.h2 
            className="title-secondary"
            variants={itemVariants}
          >
            Notre Histoire
          </motion.h2>
          
          <motion.div 
            className={style.storyContent}
            variants={itemVariants}
          >
            <p className="text-large">
              Depuis 1954, la Boulangerie Dego perpétue la tradition du pain artisanal au cœur de Grenoble. 
              Trois générations de boulangers passionnés se sont succédé pour vous offrir le meilleur du savoir-faire français.
            </p>
            
            <p className="text-body">
              Notre engagement ? Utiliser uniquement des ingrédients de première qualité, 
              respecter les temps de fermentation traditionnels et cuire nos pains dans un four à pierre 
              qui donne cette croûte dorée et croustillante que vous appréciez tant.
            </p>
            
            <p className="text-body">
              Chaque matin, dès 4h30, notre équipe met tout son cœur à l'ouvrage pour vous proposer 
              des produits frais, savoureux et authentiques. Parce que chez nous, 
              <span className="text-accent"> le pain, c'est un art de vivre</span>.
            </p>
            
            <motion.div 
              className={style.highlights}
              variants={itemVariants}
            >
              <div className={style.highlight}>
                <span className={style.number}>70</span>
                <span className={style.label}>ans d'expérience</span>
              </div>
              <div className={style.highlight}>
                <span className={style.number}>100%</span>
                <span className={style.label}>fait maison</span>
              </div>
              <div className={style.highlight}>
                <span className={style.number}>3</span>
                <span className={style.label}>générations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default APropos;
