import style from "./Detailpage.module.css"
import { useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router"
import { ROUTES } from "../../constants/routes"
import { fetchOnePokemon, patchPokemon, fetchPokemonReviews } from "../../api/apiFetch"
import { NavButtons } from "../../components/NavButtons/NavButtons"
import { PokemonTypesList } from "../../components/PokemonTypesList/PokemonTypesList"
import { StatList } from "../../components/StatList/StatList"
import { LikeCounter } from "../../components/LikeCounter/LikeCounter"
import { Review } from "../../components/Review/Review"

export function Detailpage() {
    
    const {id} = useParams()
    const parsedId = Number(id)
    const parsedMaxId = Number(import.meta.env.VITE_MAX_POKEMON_ID)
    const navigate = useNavigate()
    
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [currentLikes, setCurrentLikes] = useState(0)
    const [currentReviews, setCurrentReviews] = useState([])


    const loadCurrentPokemon = async (id) => {
        const pokemonData = await fetchOnePokemon(id)
        setCurrentPokemon(pokemonData)
    }

    const loadCurrentReviews = async (id) => {
        const reviewsData = await fetchPokemonReviews(id)
        setCurrentReviews(reviewsData)       
    }

    const updatePokemonLikes = async () => {
        const pokemonPatched = await patchPokemon(id, {like: (currentLikes + 1)})
        if (pokemonPatched) {setCurrentLikes(prevCurrentLikes => prevCurrentLikes + 1)}
    }


    useEffect(() => {
        if (parsedId >= 1 && parsedId <= parsedMaxId) {
            loadCurrentPokemon(id)
            loadCurrentReviews(id)
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

                    <div className={style.pokemonReviews}>
                        <h2>Reviews</h2>
                        <ul>
                            {currentReviews.map(review => (
                                <li key={review.id}>
                                    <Review author={review.author} content={review.content}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        }
        </>
    )
}