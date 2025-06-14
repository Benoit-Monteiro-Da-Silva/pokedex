import { useEffect, useState } from 'react'
import { fetchAllPokemons } from "../../api/apiFetch"
import { PokemonCardList } from '../../components/PokemonCardList/PokemonCardList'


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
      <PokemonCardList pkmnArray={pokemons}/>
    </>
  )    
}