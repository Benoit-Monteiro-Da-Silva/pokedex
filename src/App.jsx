import { useEffect, useState } from 'react'
import './App.css'
import { fetchAllPokemons } from './utils/apiFetch'

export default function App() {

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