import Avis from "./Avis/Avis";
import style from "./Temoignage.module.css";
function Temoignage() {
  return (
    <div className={style.temoignage}>
      <h1 className="title">Témoignages</h1>
        <div className={style.avisContainer}>
            <Avis prenom="Pierre A.">« Une boulangerie comme on n’en fait plus ! Pain délicieux et accueil au top. 5/5 ⭐️ »</Avis>
            <Avis prenom="Marie L.">« Des croissants incroyables et un personnel adorable. »</Avis>
            <Avis prenom ="Antoine D.">« Le pain complet, une vraie tuerie. »</Avis>
        </div>
    </div>
  );
}

export default Temoignage;
