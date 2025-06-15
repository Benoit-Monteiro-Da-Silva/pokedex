import style from "./SearchBar.module.css"

//Display an input field used to filter the displayed pokemon list
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