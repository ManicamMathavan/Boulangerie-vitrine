import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";
import style from "./Accroche.module.css";
function Accroche() {
  return (
    <div className={style.accroche}>
      <h2 className="title">Ce site vous plaît ?</h2>
        <h2 className={`title ${style.gras}`}>Faites le vôtre dès maintenant !</h2>
      <button className="btn textProperty btn-warning btn-lg">Demander un site comme celui-ci</button>

        <div className={style.socialIcons}>
            <SocialIcon url="https://x.com"></SocialIcon>
            <SocialIcon url="https://www.instagram.com/"></SocialIcon>
        </div>
    </div>
  );
}
export default Accroche;