import { Stat } from "../Stat/Stat"

//Display the list of one pokemon stats
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