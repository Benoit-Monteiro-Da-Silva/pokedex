import style from "./NavButtons.module.css"
import { Link } from "react-router"
import { ROUTES } from "../../constants/routes"

//Display two navigations buttons (Prev and Next) to go from one pokemon detailed page to another
export function NavButtons({id}) {
    return(
        <div className={style.navButtons}>
            { id > 1 ? <Link to={ROUTES.DETAIL.replace(":id", (id - 1))}>⬅️</Link> 
                        : <span className={style.disabledNavButton}>⬅️</span> }
            { id < 151 ? <Link to={ROUTES.DETAIL.replace(":id", (Number(id) + 1))}>➡️</Link> 
                        : <span className={style.disabledNavButton}>➡️</span> }
        </div>        
    )
}