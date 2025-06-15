export const fetchAllPokemons = async () => {
    try {
        const apiData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/pokemons`)
        const response = await apiData.json()
        return response
    } catch (error) {
        console.error(`Error: ${error}`)
        return []
    }
}

export const fetchOnePokemon = async (id) => {
    try {
        const apiData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/pokemons/${id}`)
        const response = await apiData.json()
        return response
    } catch (error) {
        console.error(`Error: ${error}`)
        return null
    }
}