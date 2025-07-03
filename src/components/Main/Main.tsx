import { motion } from "framer-motion";
import style from "./Main.module.css";

// Import des composants selon cahier des charges
import Presentation from "./Presentation/Presentation";
import APropos from "./APropos/APropos";
import NosProduits from "./NosProduits/NosProduits";
import Contact from "./Contact/Contact";
import AvisClients from "./AvisClients/AvisClients";
import PiedDePage from "./PiedDePage/PiedDePage";

function Main() {
  return (
    <motion.main 
      className={style.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Structure sémantique optimisée pour le SEO */}
      
      {/* En-tête / Présentation avec image intérieur boulangerie - Section hero avec H1 principal */}
      <section id="presentation" aria-label="Présentation de la boulangerie">
        <Presentation />
      </section>

      {/* À propos - Histoire et engagement - Section avec informations d'entreprise */}
      <section id="a-propos" aria-label="À propos de notre boulangerie">
        <APropos />
      </section>

      {/* Nos produits - 4 produits avec photos - Section produits avec données structurées */}
      <section id="nos-produits" aria-label="Nos spécialités de boulangerie">
        <NosProduits />
      </section>

      {/* Horaires & contact avec Google Maps - Section contact avec données locales */}
      <section id="contact" aria-label="Nos horaires et informations de contact">
        <Contact />
      </section>

      {/* Avis clients - Témoignages fictifs - Section social proof */}
      <section id="avis-clients" aria-label="Avis et témoignages de nos clients">
        <AvisClients />
      </section>

      {/* Pied de page - Accroche commerciale - Section finale avec CTA */}
      <section id="pied-de-page" aria-label="Informations complémentaires">
        <PiedDePage />
      </section>
    </motion.main>
  );
}

export default Main;