import { useEffect, useState } from 'react'
import { fetchAllPokemons } from "../../api/apiFetch"
import { PokemonCardList } from '../../components/PokemonCardList/PokemonCardList'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import style from "./Homepage.module.css"
import { Normalizer } from '../../services/services'

export function Homepage() {
  const [pokemons, setPokemons] = useState([])
  const [filterValue, setFilterValue] = useState('')

  const filteredPokemons = pokemons.filter(pokemon => (
    Normalizer.stringNormalizer(pokemon.name).includes(Normalizer.stringNormalizer(filterValue))
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
      <SearchBar inputValue={filterValue} onInputChange={setFilterValue}/>
      <PokemonCardList pkmnArray={filteredPokemons}/>
    </main>
  )    
}