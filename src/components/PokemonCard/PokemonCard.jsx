import style from "./PokemonCard.module.css"
import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"
import { TypeBadgeList } from "../TypeBadgeList/TypeBadgeList"

//Display a pokemon card and redirect to the corresponding pokemon page when clicked on
export function PokemonCard({id, name, types}) {
    const imgUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}/${id}.svg`

    return(
        <Link to={ROUTES.DETAIL.replace(":id", id)} className={style.pokemonCard}>
            <div className={style.imgContainer}>
                <img src={imgUrl} alt=""/>
            </div>
            <p className={style.pokemonName}>#{id} {name}</p>
            <TypeBadgeList types={types}/>
        </Link>
    )
}