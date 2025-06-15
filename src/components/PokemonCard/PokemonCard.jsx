import style from "./PokemonCard.module.css"
import { getTypeColor } from "../../utils/utils"
import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"

//Display a pokemon card with its image, its id, its name and its types
export function PokemonCard({id, name, types}) {

    return(
        <Link to={ROUTES.DETAIL.replace(":id", id)} className={style.pokemonCard}>
            <div className={style.imgContainer}>
                <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${id}.svg`} alt={name}/>
            </div>
            <p className={style.pokemonName}>#{id} {name}</p>
            <ul className={style.pokemonTypesList}>
                {types.map((type, index) => (
                    <li className={style.typeBadge}
                        style={{background: getTypeColor(type)}} 
                        key={index}>
                        {type}
                    </li>
                ))}
            </ul>
        </Link>
    )
}