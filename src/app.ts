import { CharacterModule } from './modules/character/character.module'

const start = async () => {

  await CharacterModule()

  console.log('Work completed')
}

start()