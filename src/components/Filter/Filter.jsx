import style from "./Filter.module.css"

export function Filter({inputValue, onInputChange}) {
    return(
        <input 
            type="text"
            className={style.filterInput}
            placeholder="Filter the pokemon list, ex: Pikachu..."
            value={inputValue} 
            onChange={(e) => onInputChange(e.target.value)}/>
    )
}