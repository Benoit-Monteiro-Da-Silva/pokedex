import style from './ReviewCard.module.css'

//Display a review with its author and its content.
export function ReviewCard({author, content}) {
    return(
        <div className={style.review}>
            <p>{content}</p>
            <span className={style.author}>Posted by: {author}</span>
        </div>
    )
}