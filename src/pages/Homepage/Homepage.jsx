import { useEffect, useState } from 'react'
import { fetchAllPokemons } from "../../api/apiFetch"
import { PokemonCardList } from '../../components/PokemonCardList/PokemonCardList'
import { Filter } from '../../components/Filter/Filter'
import style from "./Homepage.module.css"

export function Homepage() {
  const [pokemons, setPokemons] = useState([])
  const [filterValue, setFilterValue] = useState('')

  const filteredPokemons = pokemons.filter(pokemon => (
    pokemon.name.toLowerCase().trim().includes(filterValue.toLowerCase().trim())
  ))

  const loadAllPokemons = async () => {  
    const apiResponse = await fetchAllPokemons()
    setPokemons(apiResponse)
  }

  useEffect(() => {
    loadAllPokemons()
  }, [])

  return(
    <main className={style.homepage}>
      <Filter inputValue={filterValue} onInputChange={setFilterValue}/>
      <PokemonCardList pkmnArray={filteredPokemons}/>
    </main>
  )    
}