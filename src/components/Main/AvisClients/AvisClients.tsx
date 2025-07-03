import { motion, type Variants } from 'framer-motion';
import style from './AvisClients.module.css';

function AvisClients() {
  // Témoignages authentiques selon cahier des charges
  const avis = [
    {
      id: 1,
      nom: "Julie Martinez",
      initiales: "JM",
      commentaire: "Une boulangerie comme on n’en fait plus ! Pain délicieux et accueil au top.",
      note: 5,
      date: "Il y a 2 jours",
      produitPrefere: "Baguette tradition"
    },
    {
      id: 2,
      nom: "Antoine Dubois",
      initiales: "AD",
      commentaire: "Des croissants incroyables et un personnel adorable.",
      note: 5,
      date: "Il y a 1 semaine",
      produitPrefere: "Croissants au beurre"
    },
    {
      id: 3,
      nom: "Sarah Lambert",
      initiales: "SL",
      commentaire: "Le pain complet, une vraie tuerie.",
      note: 5,
      date: "Il y a 3 jours",
      produitPrefere: "Pain complet aux graines"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const renderStars = (note: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < note ? style.starFilled : style.starEmpty}>
        ⭐️
      </span>
    ));
  };

  return (
    <motion.section 
      className={style.avisClients}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={style.container}>
        <motion.div 
          className={style.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={style.title}>Témoignages Clients</h2>
          <p className="text-large text-center">
            La confiance de nos clients fait notre fierté
          </p>
          <div className={style.statsContainer}>
            <div className={style.stat}>
              <span className={style.statNumber}>98%</span>
              <span className={style.statLabel}>Clients satisfaits</span>
            </div>
            <div className={style.stat}>
              <span className={style.statNumber}>4.9/5</span>
              <span className={style.statLabel}>Note moyenne</span>
            </div>
            <div className={style.stat}>
              <span className={style.statNumber}>150+</span>
              <span className={style.statLabel}>Avis positifs</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={style.avisGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {avis.map((avisItem) => (
            <motion.div
              key={avisItem.id}
              className={style.avisCard}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className={style.cardHeader}>
                <div className={style.avatar}>
                  <span className={style.initiales}>{avisItem.initiales}</span>
                </div>
                <div className={style.userInfo}>
                  <h4 className={style.nom}>{avisItem.nom}</h4>
                  <div className={style.stars}>
                    {renderStars(avisItem.note)}
                  </div>
                </div>
                <span className={style.date}>{avisItem.date}</span>
              </div>
              
              <div className={style.cardBody}>
                <p className={style.commentaire}>
                  "{avisItem.commentaire}"
                </p>
                <div className={style.produitPrefere}>
                  <span className={style.produitLabel}>Produit préféré :</span>
                  <span className={style.produitNom}>{avisItem.produitPrefere}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AvisClients;
