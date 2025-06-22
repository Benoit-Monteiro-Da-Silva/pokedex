import style from "./Detailpage.module.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { ROUTES } from "../../constants/routes"
import { fetchOnePokemon, patchPokemon, fetchPokemonReviews, postPokemonReview } from "../../api/apiFetch"
import { NavButtons } from "../../components/NavButtons/NavButtons"
import { LikeCounter } from "../../components/LikeCounter/LikeCounter"
import { PokemonResume } from "../../components/PokemonResume/PokemonResume"
import { PokemonReviews } from "../../components/PokemonReviews/PokemonReviews"

export function Detailpage() {
    
    const {id} = useParams()
    const parsedId = Number(id)
    const parsedMaxId = Number(import.meta.env.VITE_MAX_POKEMON_ID)
    const navigate = useNavigate()
    
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [currentLikes, setCurrentLikes] = useState(0)
    const [currentReviews, setCurrentReviews] = useState([])
    const [heartAnimated, setHeartAnimated] = useState(false)

    const imgUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}/${currentPokemon?.id}.svg`

    const loadCurrentPokemon = async (id) => {
        const pokemonData = await fetchOnePokemon(id)
        setCurrentPokemon(pokemonData)
    }

    const loadCurrentReviews = async (id) => {
        const reviewsData = await fetchPokemonReviews(id)
        const mostRecentReviewsFirst = reviewsData.reverse()
        setCurrentReviews(mostRecentReviewsFirst)       
    }

    const updatePokemonLikes = async () => {
        const pokemonPatched = await patchPokemon(id, {like: (currentLikes + 1)})
        if (pokemonPatched) {
            setCurrentLikes(prevCurrentLikes => prevCurrentLikes + 1)
            setHeartAnimated(true)
            setTimeout(() => setHeartAnimated(false), 1000)
        }
    }

    const addReview = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formValues = Object.fromEntries(formData)

        const postedReview = await postPokemonReview(id, formValues.review)
        if (postedReview) {
            loadCurrentReviews(id)
            e.target.reset()
        }
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

                <div className={style.backgroundImg}>
                    <img src="/src/assets/pokeball_bg.svg"/>
                </div>

                <div className={style.pokemonData}>
                    <div className={style.pokemonImg}>
                        <img src={imgUrl} alt=""/>
                    </div>
                    <PokemonResume 
                        id={currentPokemon?.id} 
                        name={currentPokemon?.name} 
                        types={currentPokemon?.types} 
                        stats={currentPokemon?.base}/>
                    <div className={style.likesAndReviewsContainer}>
                        <LikeCounter likes={currentLikes} onClick={updatePokemonLikes} animated={heartAnimated}/>
                        <PokemonReviews reviews={currentReviews} onSubmit={addReview}/>
                    </div>
                </div>
            </main>
        }
        </>
    )
}