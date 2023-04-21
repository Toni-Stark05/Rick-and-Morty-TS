import CharacterService from './character.service'
import Character from "./character.model";
export const CharacterModule = async (): Promise<void> => {
    try {
      await Character.sync({ force: true })
      await CharacterService.loadData()
      console.log('CharacterModule completed!')
    } catch(e) {
        throw new Error(`CharacterModule ERROR: ${e}`)
    }
}