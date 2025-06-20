import { TypeBadgeList } from "../TypeBadgeList/TypeBadgeList"
import { StatList } from "../StatList/StatList"

export function PokemonResume({id, name, types, stats}) {
    return(
        <div>
            <h1>#{id} {name}</h1>
            <TypeBadgeList types={types}/>
            <StatList stats={stats}/>
        </div>
    )
}