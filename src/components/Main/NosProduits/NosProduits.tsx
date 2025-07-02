import croissant_beurre from "../../../assets/croissant_beurre.png";
import pain from "../../../assets/pain.png";
import pain_campagne from "../../../assets/pain_campagne.png";
import style from "./NosProduits.module.css";
import Produit from "./Produit/Produit";
function NosProduits() {
  return (

    <div className={style.nosProduits}>
      <div className={style.produitDescription}>
        <h1 className="title">Nos Produits</h1>
        <h2 className="pProperty">Découvrez notre sélection de produits artisanaux.</h2>
      </div>
      <div className={style.produits}>
        <Produit src={pain}>Baguette traditionelle : croustillante, dorée, cuite sur pierre</Produit>
        <Produit src={pain_campagne}>Pain de campagne : goût rustique, fermentation lente</Produit>
        <Produit src={croissant_beurre}>Pain de campagne :  pur beurre AOP, feuilleté à souhait</Produit>
        {/* <Produit width={500} src={pain_complet}>Pain complet : riche en fibres, idéal pour le matin</Produit> */}
      </div>

    </div>

  );
}

export default NosProduits;