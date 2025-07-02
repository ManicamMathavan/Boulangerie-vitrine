import type { ReactElement, ReactNode } from "react";
import style from "./ContactLogo.module.css";

function ContactLogo({Logo, children} : {Logo: ReactNode , children:ReactNode}): ReactElement {
  return (
    <>
        <div className={style.logoWithText}>  
        <div className={style.logo}>{Logo}</div>
           <h2 className="imgDescription pProperty">
            {children}
            </h2>
        </div>
    </>
  );
}
export default ContactLogo;