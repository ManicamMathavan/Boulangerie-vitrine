import MailLogo from "../../../assets/mail.tsx";
import Position from "../../../assets/position.tsx";
import Telephone from "../../../assets/telephone.tsx";
import style from "./Contact.module.css";
import ContactLogo from "./ContactLogo/ContactLogo.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
const width = 125;
const height = 125;
function Contact() {
  return (
    <div className={style.contact}>
      <h1 className="title">Contact</h1>
      <div className={style.logoContainer}>
        <ContactLogo Logo={<Position width={width} height={height} />}>
          12 rue de la Boulange, 38000 Grenoble <br />
          Ouvert du lundi au samedi de 6h30 à 19h30
        </ContactLogo>
        <ContactLogo Logo={<MailLogo width={width} height={height} />}>
          pierre@example.com
        </ContactLogo>
        <ContactLogo Logo={<Telephone width={width} height={height} />}>
          05 56 56 56 56
        </ContactLogo>
      </div>
      {/* <div className={style.iframeContainer}> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11247.83107092787!2d5.7150635152959905!3d45.18795113712885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s12%20rue%20de%20la%20Boulange%2C%2038000%20Grenoble!5e0!3m2!1sfr!2sfr!4v1751456840601!5m2!1sfr!2sfr"
        width="100%"
        height={550}
        style={{ border: 0 }}
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* </div> */}
      <button className="pProperty btn btn-warning btn-lg">
        Nous contactez
      </button>
    </div>
  );
}
export default Contact;
