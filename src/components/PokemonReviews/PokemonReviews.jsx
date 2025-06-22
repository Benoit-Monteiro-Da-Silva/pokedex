import { ReviewForm } from "../ReviewForm/ReviewForm"
import { ReviewList } from "../ReviewList/ReviewList"

//Display all the registered reviews of a pokemon, as well as an input field to add one.
export function PokemonReviews({onSubmit, reviews, reviewAdded}) {
    return(
        <div>
            <h2>Reviews</h2>
            <ReviewForm onSubmit={onSubmit}/>
            <ReviewList reviews={reviews} reviewAdded={reviewAdded}/>
        </div>        
    )
}