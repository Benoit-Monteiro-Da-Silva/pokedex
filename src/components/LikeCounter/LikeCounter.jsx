import style from "./LikeCounter.module.css"
import { patchPokemon } from "../../api/apiFetch"
import { useState } from "react"

//Display a like counter that increases each time it is clicked
export function LikeCounter({id, likes}) {

    const [currentLikes, setCurrentLikes] = useState(likes)

    const updatePokemonLikes = async () => {
        const pokemonPatched = await patchPokemon(id, {like: (currentLikes + 1)})
        if (pokemonPatched) {setCurrentLikes(prev => prev + 1)}
    }

    return(
        <div className={style.likeContainer}>
            <button className={style.likeButton} 
                    onClick={updatePokemonLikes}>
                    ❤️
            </button>
            <span className={style.likeCounter}>{currentLikes}</span>
        </div>
    )
}