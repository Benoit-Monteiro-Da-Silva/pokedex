export const fetchAllPokemons = async () => {
    try {
        const apiData = await fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_POKEMONS_ENDPOINT}`)
        const response = await apiData.json()
        return response
    } catch (error) {
        console.error(`Error: ${error}`)
        return []
    }
}

export const fetchOnePokemon = async (id) => {
    try {
        const apiData = await fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_POKEMONS_ENDPOINT}/${id}`)
        const response = await apiData.json()
        return response
    } catch (error) {
        console.error(`Error: ${error}`)
        return null
    }
}