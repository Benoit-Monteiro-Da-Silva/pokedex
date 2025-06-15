import { PKMN_TYPES } from "../constants/pkmn_fixed_data.js"

export const getTypeColor = (type) => {
    for (const item of PKMN_TYPES) {
        if (item.name === type) {
            return item.color
        }
    }
}