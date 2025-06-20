import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../ReviewList/ReviewList"

export function PokemonReviews({onSubmit, reviews}) {
    return(
        <div>
            <h2>Reviews</h2>
            <ReviewForm onSubmit={onSubmit}/>
            <ReviewList reviews={reviews}/>
        </div>        
    )
}