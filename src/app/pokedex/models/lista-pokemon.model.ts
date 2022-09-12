export interface ListaPokemonResponse {
  count?: number | null
  next?: string | null
  previous?: any | null
  results?: Result[]
}

export interface Result {
  name: string
  url: string
}
