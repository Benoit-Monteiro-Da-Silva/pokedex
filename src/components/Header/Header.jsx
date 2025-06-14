import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"
import pokeballLogo from "../../assets/pokeball.png"
import pokedexLogo from "../../assets/pokedex.png"
import style from "./Header.module.css"

//Display this app logo and redirect to the home page when clicked on.
export function Header() {
    return(
        <header className={style.header}>
            <Link to={ROUTES.HOME} className={style.link}>
                <div className={style.pokeball}>
                    <img src={pokeballLogo} alt=""/>
                </div>
                <div className={style.pokedexLogo}>
                    <img src={pokedexLogo} alt="Pokedex"/>
                </div>
            </Link>
        </header>
    )
}