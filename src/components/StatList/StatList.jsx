import { Stat } from "../Stat/Stat"

//Display all the stats of a pokemon.
export function StatList({stats}) {
    const statsArray = Object.entries(stats)
    
    return(
        <ul>
            {statsArray.map((stat, index) => (
                <li key={index}>
                    <Stat statLabel={stat[0]} statValue={stat[1]}/>
                </li>
            ))}
        </ul>
    )
}