import style from "./TypeBadge.module.css"
import { getTypeColor } from "../../utils/utils"

//Display a badge type with its name and its color
export function TypeBadge({type}) {
    return(
        <div className={style.typeBadge}
            style={{background: getTypeColor(type)}}>
            {type}
        </div>
    )
}