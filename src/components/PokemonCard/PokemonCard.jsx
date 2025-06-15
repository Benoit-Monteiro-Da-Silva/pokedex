import style from "./PokemonCard.module.css"
import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"
import { PokemonTypesList } from "../PokemonTypesList/PokemonTypesList"

//Display a pokemon card with its image, its id, its name and its types
export function PokemonCard({id, name, types}) {

    return(
        <Link to={ROUTES.DETAIL.replace(":id", id)} className={style.pokemonCard}>
            <div className={style.imgContainer}>
                <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${id}.svg`} alt={name}/>
            </div>
            <p className={style.pokemonName}>#{id} {name}</p>
            <PokemonTypesList types={types}/>
        </Link>
    )
}