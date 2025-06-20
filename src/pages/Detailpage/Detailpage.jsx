import { useNavigate, useParams } from "react-router"
import style from "./Detailpage.module.css"
import { NavButtons } from "../../components/NavButtons/NavButtons"
import { useState, useEffect} from "react"
import { fetchOnePokemon, patchPokemon } from "../../api/apiFetch"
import { ROUTES } from "../../constants/routes"
import { PokemonTypesList } from "../../components/PokemonTypesList/PokemonTypesList"
import { StatList } from "../../components/StatList/StatList"
import { LikeCounter } from "../../components/LikeCounter/LikeCounter"

export function Detailpage() {
    
    const {id} = useParams()
    const parsedId = Number(id)
    const parsedMaxId = Number(import.meta.env.VITE_MAX_POKEMON_ID)
    const navigate = useNavigate()
    
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [currentLikes, setCurrentLikes] = useState(0)


    const loadCurrentPokemon = async (id) => {
        const apiResponse = await fetchOnePokemon(id)
        setCurrentPokemon(apiResponse)
    }

    const updatePokemonLikes = async () => {
        const pokemonPatched = await patchPokemon(id, {like: (currentLikes + 1)})
        if (pokemonPatched) {setCurrentLikes(prevCurrentLikes => prevCurrentLikes + 1)}
    }


    useEffect(() => {
        if (parsedId >= 1 && parsedId <= parsedMaxId) {
            loadCurrentPokemon(id)
        } else {
            navigate(ROUTES.NOT_FOUND)
        }
    }, [id])


    useEffect(() => {
        setCurrentLikes(currentPokemon?.like)
    }, [currentPokemon])


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
                        <h1>#{currentPokemon?.id} {currentPokemon?.name}</h1>
                        <PokemonTypesList types={currentPokemon?.types}/>
                        <StatList stats={currentPokemon?.base}/>
                    </div>

                    <LikeCounter likes={currentLikes} onClick={updatePokemonLikes}/>
                </div>
            </main>
        }
        </>
    )
}