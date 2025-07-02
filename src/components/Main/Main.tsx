import About from "./About/About";
import style from "./Main.module.css";
import NosProduits from "./NosProduits/NosProduits";
import Presentation from "./Presentation/Presentation";
import Contact from "./Contact/Contact";
import Temoignage from "./Temoignage/Temoignage";
import Accroche from "./Accroche/Accroche";
function Main(){
    return(
 <>
    <div className={style.main}>
        <Presentation/>
        <About/>
        <NosProduits/>
        <Contact/>
        <Temoignage></Temoignage>
        <Accroche></Accroche>
    </div>
 </> )  
}

export default Main;