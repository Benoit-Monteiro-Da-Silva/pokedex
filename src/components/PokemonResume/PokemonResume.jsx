import style from './PokemonResume.module.css'
import { TypeBadgeList } from "../TypeBadgeList/TypeBadgeList"
import { StatList } from "../StatList/StatList"

//Display the whole resume of a pokemon.
export function PokemonResume({id, name, types, stats}) {
    return(
        <div className={style.pokemonResume}>
            <h1 className={style.pokemonName}>#{id} {name}</h1>
            <TypeBadgeList types={types}/>
            <StatList stats={stats}/>
        </div>
    )
}