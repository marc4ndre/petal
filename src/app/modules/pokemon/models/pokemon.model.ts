export interface Pokemon {
  name: string
  type: string
  evolution: string
}

interface PokemonResult {
  name: string
  url: string
}

export interface PokemonList {
  results: PokemonResult[];
}
