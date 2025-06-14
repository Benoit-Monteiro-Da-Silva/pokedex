import { useEffect, useState } from 'react'
import { fetchAllPokemons } from "../../api/apiFetch"


export function Homepage() {
  const [pokemons, setPokemons] = useState([])

  const loadAllPokemons = async () => {  
    const apiResponse = await fetchAllPokemons()
    setPokemons(apiResponse)
  }


  useEffect(() => {
    loadAllPokemons()
  }, [])


  return(
    <>
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </>
  )    
}