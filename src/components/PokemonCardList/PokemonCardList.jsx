import { PokemonCard } from "../PokemonCard/PokemonCard"
import style from "./PokemonCardList.module.css"

//Display all PokemonCard from a given array of pokemon data
export function PokemonCardList({pkmnArray}) {
    return (
        <ul className={style.pkmnList}>
            {pkmnArray.map(pkmn => (
                <li key={pkmn.id}>
                    <PokemonCard
                        id={pkmn.id} 
                        name={pkmn.name} 
                        types={pkmn.types}/>
                </li>
            ))}
        </ul>
    )
}