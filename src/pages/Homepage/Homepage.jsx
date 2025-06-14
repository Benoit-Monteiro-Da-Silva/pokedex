import { useEffect, useState } from 'react'
import { fetchAllPokemons } from "../../api/apiFetch"
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'


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
      {/* {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <img src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/${pokemon.id}.svg`}/>
          {pokemon.name}
        </div>
      ))} */}
      <PokemonCard id={1} name={"Bulbizarre"} types={["Grass", "Poison"]} image={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/1.svg`}/>
    </>
  )    
}