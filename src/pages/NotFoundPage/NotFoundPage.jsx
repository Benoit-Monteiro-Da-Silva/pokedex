import UnownQuestion from "../../assets/UnownQuestion.png"
import style from "./NotFoundPage.module.css"
import { ROUTES } from "../../constants/routes"
import { Link } from "react-router"

export function NotFoundPage() {
    return(
        <main className={style.notFoundPage}>
            <div className={style.imgContainer}>
                <img src={UnownQuestion}/>
            </div>
            <div className={style.textBloc}>
                <p className={style.error404}>Error 404 !</p>
                <p className={style.errorMessage}>You fell in the unown world...</p>
                <Link to={ROUTES.HOME} className={style.homeLink}>Return to the Homepage</Link>
            </div>
        </main>
    )
}