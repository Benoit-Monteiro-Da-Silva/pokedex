import { TypeBadge } from "../TypeBadge/TypeBadge"
import style from "./PokemonTypesList.module.css"

//Display the list of types a pokemon has
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