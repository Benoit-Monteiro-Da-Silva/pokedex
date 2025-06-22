import style from "./ReviewList.module.css"
import { ReviewCard } from "../ReviewCard/ReviewCard"

//Display all the reviews for a pokemon.
export function ReviewList({reviews}) {
    return(
        <ul className={style.reviewList}>
            {reviews.map(review => (
                <li key={review.id}>
                    <ReviewCard author={review.author} content={review.content}/>
                </li>
            ))}
        </ul>        
    )
}