import style from "./ReviewList.module.css"
import { ReviewCard } from "../ReviewCard/ReviewCard"

//Display a list of reviews
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