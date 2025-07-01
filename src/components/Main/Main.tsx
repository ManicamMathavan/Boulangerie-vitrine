import About from "./About/About";
import style from "./Main.module.css";
import NosProduits from "./NosProduits/NosProduits";
import Presentation from "./Presentation/Presentation";
function Main(){
    return(
 <>
    <div className={style.main}>
        <Presentation/>
        <About/>
        <NosProduits/>
    </div>
 </> )  
}

export default Main;