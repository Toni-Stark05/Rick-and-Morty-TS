export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  url: string[]
  created: string
}

export interface IInfo {
  count: number
  pages: number
  next: string
  prev: string
}

export interface IResponse {
  info: IInfo,
  results: ICharacter[]
}