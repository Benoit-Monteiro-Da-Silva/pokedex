import { PKMN_TYPES } from "../constants/pkmn_types_colors"

export const getTypeColor = (type) => {
    for (const item of PKMN_TYPES) {
        if (item.name === type) {
            return item.color
        }
    }
}