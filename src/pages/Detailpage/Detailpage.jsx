import { useParams } from "react-router"
import style from "./Detailpage.module.css"
import { NavButtons } from "../../components/NavButtons/NavButtons"
import { useState, useEffect} from "react"
import { fetchOnePokemon } from "../../api/apiFetch"

export function Detailpage() {
    const {id} = useParams()
    const [currentPokemon, setCurrentPokemon] = useState(null)

    const loadCurrentPokemon = async (id) => {
        const apiResponse = await fetchOnePokemon(id)
        setCurrentPokemon(apiResponse)
    }

    useEffect(() => {
        loadCurrentPokemon(id)
    }, [])


    return(
        <main className={style.detailpage}>
            <NavButtons id={id}/>
            <div>
                <div className={style.imgContainer}>
                    <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${id}.svg`}/>
                </div>

                <div className={style.pkmnResume}>
                    <h1>{currentPokemon.name}</h1>
                </div>
            </div>
        </main>
    )
}