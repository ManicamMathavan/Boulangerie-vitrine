import interieur from "../../../assets/interieur.png";
import style from "./Presentation.module.css";

function About (){

    return(
    <div className={style.presentation}>
      <h1 className="title">Du pain fait avec passion depuis 1954</h1>
      <img src={interieur} alt="" />
      </div>
    )
}

export default About;