import type { ReactNode } from "react";
import style from "./Avis.module.css";
function Avis ({prenom, children} : {prenom: string, children: ReactNode}) {
    return (
        
        <div className={style.avis}>
            <h2 className="textProperty">{prenom}</h2>
            <p className="textProperty">{children}</p>
        </div>
        
    )
}

export default Avis;