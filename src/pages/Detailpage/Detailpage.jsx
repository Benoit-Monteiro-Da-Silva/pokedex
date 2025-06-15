import { useNavigate, useParams } from "react-router"
import style from "./Detailpage.module.css"
import { NavButtons } from "../../components/NavButtons/NavButtons"
import { useState, useEffect} from "react"
import { fetchOnePokemon } from "../../api/apiFetch"
import { ROUTES } from "../../constants/routes"
import { PokemonTypesList } from "../../components/PokemonTypesList/PokemonTypesList"
import { Stat } from "../../components/Stat/Stat"

export function Detailpage() {
    
    const {id} = useParams()
    const parsedId = Number(id)
    const parsedMaxId = Number(import.meta.env.VITE_MAX_POKEMON_ID)
    const navigate = useNavigate()
    const [currentPokemon, setCurrentPokemon] = useState(null)

    const loadCurrentPokemon = async (id) => {
        const apiResponse = await fetchOnePokemon(id)
        setCurrentPokemon(apiResponse)
    }

    useEffect(() => {
        if (parsedId >= 1 && parsedId <= parsedMaxId) {
            loadCurrentPokemon(id)
        } else {
            navigate(ROUTES.NOT_FOUND)
        }
    }, [id])


    return(
        <>
        {currentPokemon &&
            <main className={style.detailpage}>
                <NavButtons id={currentPokemon?.id}/>
                <div className={style.pokemonData}>
                    <div className={style.imgContainer}>
                        <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${currentPokemon?.id}.svg`}/>
                    </div>

                    <div className={style.pokemonResume}>
                        <h1>{currentPokemon?.name}</h1>
                        <PokemonTypesList types={currentPokemon?.types}/>
                        <Stat statLabel={'HP'} statValue={45}/>
                        <Stat statLabel={'Special defense'} statValue={103}/>
                    </div>
                </div>
            </main>
        }
        </>
    )
}