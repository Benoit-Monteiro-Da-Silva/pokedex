import { PokemonCard } from "../PokemonCard/PokemonCard"
import style from "./PokemonCardList.module.css"

export function PokemonCardList({pkmnArray}) {
    return (
        <ul className={style.pkmnList}>
            {pkmnArray.map(pkmn => (
                <li key={pkmn.id}>
                    <PokemonCard
                        id={pkmn.id} 
                        name={pkmn.name} 
                        types={pkmn.types} 
                        image={`${import.meta.env.VITE_IMAGE_BASE_URL}/${pkmn.id}.svg`}/>
                </li>
            ))}
        </ul>
    )
}