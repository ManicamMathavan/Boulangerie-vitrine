import { motion } from 'framer-motion';
import croissant_beurre from "../../../assets/webp/croissant_beurre.webp";
import pain from "../../../assets/webp/pain.webp";
import pain_campagne from "../../../assets/webp/pain_campagne.webp";
import pain_complet from "../../../assets/webp/pain_complet.webp";
import style from "./NosProduits.module.css";
import Produit from "./Produit/Produit";

function NosProduits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className={style.nosProduits}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={style.produitDescription}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nos Produits
        </motion.h1>
        <motion.h2 
          className="pProperty"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Découvrez notre sélection de produits artisanaux.
        </motion.h2>
      </motion.div>
      
      <motion.div 
        className={style.produits}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Produit src={pain}>Baguette traditionnelle : croustillante, dorée, cuite sur pierre</Produit>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Produit src={pain_campagne}>Pain de campagne : goût rustique, fermentation lente</Produit>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Produit src={croissant_beurre}>Croissant au beurre : pur beurre AOP, feuilleté à souhait</Produit>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <Produit src={pain_complet}>Pain complet : riche en fibres, idéal pour le petit-déjeuner</Produit>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default NosProduits;