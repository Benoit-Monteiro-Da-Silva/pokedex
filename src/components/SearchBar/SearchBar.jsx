import style from "./SearchBar.module.css"

//Display an input field that filters the displayed Pokemon list as the user types.
export function SearchBar({inputValue, onInputChange}) {
    return(
        <input 
            type="text"
            className={style.filterInput}
            placeholder="Filter the pokemon list, ex: Pikachu..."
            value={inputValue} 
            onChange={(e) => onInputChange(e.target.value)}/>
    )
}