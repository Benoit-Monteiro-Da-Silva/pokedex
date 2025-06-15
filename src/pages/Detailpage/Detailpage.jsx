import { useParams } from "react-router"

export function Detailpage() {
    const {id} = useParams()

    return(
        <main>
            <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${id}.svg`}/>
        </main>
    )
}