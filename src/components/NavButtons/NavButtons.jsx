import style from "./NavButtons.module.css"
import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"

//Display two navigations buttons: one to go to the previous pokemon page in the id order, one to go to the next
export function NavButtons({id}) {
    const parsedMaxId = Number(import.meta.env.VITE_MAX_POKEMON_ID)

    return(
        <div className={style.navButtons}>
            { id > 1 ? 
                <Link to={ROUTES.DETAIL.replace(":id", (id - 1))}>⬅️</Link> 
                : <span className={style.disabledNavButton}>⬅️</span> 
            }
            { id < parsedMaxId ? 
                <Link to={ROUTES.DETAIL.replace(":id", (Number(id) + 1))}>➡️</Link> 
                : <span className={style.disabledNavButton}>➡️</span> 
            }
        </div>        
    )
}