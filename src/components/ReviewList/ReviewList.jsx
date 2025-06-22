import style from "./ReviewList.module.css"
import { ReviewCard } from "../ReviewCard/ReviewCard"

//Display all the reviews for a pokemon.
export function ReviewList({reviews, reviewAdded}) {
    return(
        <ul className={style.reviewList}>
            {reviews.map((review, index) => (
                <li key={review.id} className={index === 0 && reviewAdded ? style.scanned : ''}>
                    <ReviewCard author={review.author} content={review.content}/>
                </li>
            ))}
        </ul>        
    )
}