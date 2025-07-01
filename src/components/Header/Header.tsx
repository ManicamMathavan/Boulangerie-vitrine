import logo from "../../assets/logo.png";
import style from './Header.module.css';
function Header(){
    return (
        <header className={style.header}>
            <div className={style.leftContent}>
                <img src={logo} alt="" width={100} height={100}/>
                <h2>La boulangerie Dego</h2>
            </div>

            <div className={style.rightContent}>
                <p>Accueil</p>
                <p>Nos produits</p>
                <p>À propos</p>
            </div>

        </header>
    )
}   
export default Header;