import style from "./ReviewForm.module.css"

//Display an input field that allows to add a review to a pokemon when pressing Enter
export function ReviewForm({onSubmit}) {
    return(
        <form className={style.form} onSubmit={onSubmit}>
            <input 
                type="text"
                className={style.input} 
                name="review" 
                placeholder="Add a review..." 
                maxLength="100"/>
            <input type="submit" hidden/>
        </form>        
    )
}