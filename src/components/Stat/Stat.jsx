import style from "./Stat.module.css"
import { MAX_STAT } from "../../constants/pkmn_fixed_data"
import { useState, useEffect } from "react"

//Display a given pokemon stat with its name, its value, and a graphic bar
export function Stat({statLabel, statValue}) {
    const [statWidth, setStatWidth] = useState(0)
    const statColor = statWidth * 2.55

    useEffect(() => {
        setTimeout(() => {
            setStatWidth(statValue < MAX_STAT[statLabel] ? (statValue / MAX_STAT[statLabel]) * 100 : 100)
        }, 10)
    }, [statValue])

    return(
        <div className={style.stat}>
            <span className={style.statLabel}>{statLabel}</span>
            <span className={style.statValue}>{statValue}</span>
            <div className={`${style.statBar} ${style.fullStatBar}`}>
                <div className={`${style.statBar} ${style.coloredStatBar}`} 
                    style={{width: `${statWidth}%`, background: `rgba(50,${statColor},50)`}}>
                </div>
            </div>
        </div>
    )
}