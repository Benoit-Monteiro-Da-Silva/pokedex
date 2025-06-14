export const fetchAllPokemons = async () => {
    try {
        const apiData = await fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_ALL_POKEMONS_ENDPOINT}`)
        const response = await apiData.json()
        return response
    } catch (error) {
        console.error(`Error: ${error}`)
        return []
    }
}