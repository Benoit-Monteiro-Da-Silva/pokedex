import style from "./PokemonCard.module.css"
import { getTypeColor } from "../../utils/utils"

//Display a pokemon card with its image, its id, its name and its types
export function PokemonCard({id, name, types, image}) {

    return(
        <div className={style.pokemonCard}>
            <div className={style.imgContainer}>
                <img src={image} alt={name}/>
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
        </div>
    )
}