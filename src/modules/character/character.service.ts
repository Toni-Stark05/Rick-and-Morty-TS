import { IResponse } from "./character.type.js";
import api from '../../core/api/api.module.js'
import Character from "./character.model";

class CharacterService {
  async loadData(): Promise<void> {
    const data = await this.getResponse(1)
    if(data === null) throw new Error('Not Found')
    const pages = data.info.pages

    for (let i = 1; i <= pages; i++) {
      const res = await this.getResponse(i)
      if(res === null) {
        throw new Error('Not Found')
      }
      const characters = res.results
      for (let i of characters) {
        const character = new Character({
          name: i.name,
          status: i.status,
          species: i.species,
          type: i.type,
          gender: i.gender,
          image: i.image,
          url: i.url,
        })
        await character.save()
      }
    }
  }

  private async getResponse(page: number): Promise<IResponse | null> {
    const res = await api.get('character', {
      params: {
        page: page
      }
    })
    let data: IResponse | null = null
    if(this.isCharacter(res.data)) data = res.data
    return data
  }

  private isCharacter(obj: any): obj is IResponse {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      'info' in obj &&
      'results' in obj
    )
  }
}

export default new CharacterService