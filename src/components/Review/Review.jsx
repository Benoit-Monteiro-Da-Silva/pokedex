import style from './Review.module.css'

export function Review({author, content}) {
    return(
        <div className={style.review}>
            <p>{content}</p>
            <span className={style.author}>Posted by: {author}</span>
        </div>
    )
}