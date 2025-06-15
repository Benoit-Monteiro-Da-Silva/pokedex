import { useParams } from "react-router"
import style from "./Detailpage.module.css"
import { NavButtons } from "../../components/NavButtons/NavButtons"

export function Detailpage() {
    const {id} = useParams()

    return(
        <main className={style.detailpage}>
            <NavButtons id={id}/>
            <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${id}.svg`}/>
        </main>
    )
}