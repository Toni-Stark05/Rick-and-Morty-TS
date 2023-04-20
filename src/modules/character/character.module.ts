import CharacterService from "./character.service"

export const CharacterModule = async (): Promise<void> {
    try{

    console.log('CharacterModule complited!')
    } catch(e) {
        throw new Error(`CharacterModule ERROR: ${e}`)
    }
}