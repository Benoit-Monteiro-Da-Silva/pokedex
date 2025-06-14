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