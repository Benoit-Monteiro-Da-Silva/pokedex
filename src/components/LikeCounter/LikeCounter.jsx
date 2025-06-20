import style from "./LikeCounter.module.css"

//Display a like counter that increases each time it is clicked
export function LikeCounter({likes, onClick}) {

    return(
        <div className={style.likeContainer}>
            <button className={style.likeButton} 
                    onClick={onClick}>
                    ❤️
            </button>
            <span className={style.likeCounter}>{likes}</span>
        </div>
    )
}