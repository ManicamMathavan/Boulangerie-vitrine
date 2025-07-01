import pate from "../../../assets/pate.png";
import style from "./About.module.css";
function About() {
  return (


      <div className={style.about}>
         <img src={pate} alt="" />
        <div className={style.aboutContent}>
           
            <h1>À Propos</h1>
              <p className="pProperty">
                Depuis plus de vingt ans, la boulangerie Dego perpétue une tradition
                familiale passionnée par l’art du pain. Fondée au cœur de notre village,
                elle est née d’un rêve : offrir des pains authentiques, préparés avec
                amour et patience. Chez Dego, chaque baguette, chaque miche est le fruit
                d’un savoir-faire artisanal transmis de génération en génération. Nous
                privilégions les ingrédients locaux, sélectionnés avec soin, pour
                soutenir nos producteurs et garantir la fraîcheur. Notre engagement est
                simple : proposer des pains savoureux, sains, qui racontent une histoire
                et réchauffent les cœurs.
              </p>

        
      </div>
    </div>
  );
}

export default About;
