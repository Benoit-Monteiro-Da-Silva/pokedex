import { TypeBadge } from "../TypeBadge/TypeBadge"
import style from "./PokemonTypesList.module.css"

//Display a list of pokemon types badges from a give array of types
export function PokemonTypesList({types}) {
    return(
        <ul className={style.pokemonTypesList}>
            {types.map((type, index) => (
                <li key={index}>
                    <TypeBadge type={type}/>
                </li>
            ))}
        </ul>        
    )
}