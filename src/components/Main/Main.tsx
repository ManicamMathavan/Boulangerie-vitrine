import About from "./About/About";
import style from "./Main.module.css";
import NosProduits from "./NosProduits/NosProduits";
import Presentation from "./Presentation/Presentation";
import Contact from "./Contact/Contact";
function Main(){
    return(
 <>
    <div className={style.main}>
        <Presentation/>
        <About/>
        <NosProduits/>
        <Contact></Contact>
    </div>
 </> )  
}

export default Main;