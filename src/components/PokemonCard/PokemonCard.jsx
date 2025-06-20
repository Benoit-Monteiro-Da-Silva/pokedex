import style from "./PokemonCard.module.css"
import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"
import { PokemonTypesList } from "../PokemonTypesList/PokemonTypesList"

//Display a pokemon card and redirect to the corresponding pokemon page when clicked on
export function PokemonCard({id, name, types}) {
    const imgUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}/${id}.svg`

    return(
        <Link to={ROUTES.DETAIL.replace(":id", id)} className={style.pokemonCard}>
            <div className={style.imgContainer}>
                <img src={imgUrl} alt={name}/>
            </div>
            <p className={style.pokemonName}>#{id} {name}</p>
            <PokemonTypesList types={types}/>
        </Link>
    )
}