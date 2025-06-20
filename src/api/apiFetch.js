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

export const patchPokemon = async (id, data) => {
    try {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/pokemons/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return true
    } catch(error) {
        console.error(`Error: ${error}`)
        return false
    }
}

export const fetchPokemonReviews = async (id) => {
    try {
        const apiData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews/?pokemonId=${id}`)
        const response = await apiData.json()
        return response
    } catch(error) {
        console.error(`Error: ${error}`)
        return []
    }
}