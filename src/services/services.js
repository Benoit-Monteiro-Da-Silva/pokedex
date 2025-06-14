export class Normalizer {

    //Transforms accented characters into standard letters, converts uppercase letters to lowercase, 
    //and trims whitespace from the begining and end of the string
    static stringNormalizer(string) {
        return string
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .trim()
                    .toLowerCase()
    }
}