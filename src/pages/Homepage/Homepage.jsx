import { useEffect, useState } from 'react'
import { fetchAllPokemons } from "../../api/apiFetch"
import { PokemonCardList } from '../../components/PokemonCardList/PokemonCardList'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import style from "./Homepage.module.css"
import { Normalizer } from '../../services/services'

export function Homepage() {
  
  const [pokemons, setPokemons] = useState([])
  const [filterValue, setFilterValue] = useState('')

  const filteredPokemons = pokemons.filter(pokemon => {
    const normalizedFilterValue = Normalizer.stringNormalize(filterValue)
    const normalizedPokemonName = Normalizer.stringNormalize(pokemon.name)
    const normalizedPokemonTypes = pokemon.types.map(type => Normalizer.stringNormalize(type))
    return  normalizedPokemonName.includes(normalizedFilterValue) ||
            normalizedPokemonTypes[0].includes(normalizedFilterValue) ||
            (pokemon.types[1] && normalizedPokemonTypes[1].includes(normalizedFilterValue))
    }
  )

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
      {filteredPokemons.length === 0 && filterValue !=='' && <p>Aucun résultat pour la recherche : "{filterValue}"</p>}
    </main>
  )    
}