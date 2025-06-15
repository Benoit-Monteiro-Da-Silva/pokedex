import style from "./Stat.module.css"
import { MAX_STAT } from "../../constants/pkmn_fixed_data"

//Display a given pokemon stat with its name, its value, and a graphic bar
export function Stat({statLabel, statValue}) {
    const statWidth = (statValue / MAX_STAT[statLabel]) * 100

    return(
        <div className={style.stat}>
            <span className={style.statLabel}>{statLabel}</span>
            <span className={style.statValue}>{statValue}</span>
            <div className={`${style.statBar} ${style.fullStatBar}`}>
                <div className={`${style.statBar} ${style.coloredStatBar}`} style={{width: `${statWidth}%`}}></div>
            </div>
        </div>
    )
}