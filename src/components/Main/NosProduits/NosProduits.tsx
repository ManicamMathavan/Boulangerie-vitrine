import pain from "../../../assets/pain.png";
import style from "./NosProduits.module.css";
import Produit from "./Produit/Produit";
function NosProduits() {
  return (

    <div className={style.nosProduits}>
      <h1>Nos Produits</h1>
      <p>Découvrez notre sélection de produits artisanaux.</p>
      <Produit width={500} src={pain} text="jkkjkjkjkj"></Produit>
    </div>
  );
}

export default NosProduits;