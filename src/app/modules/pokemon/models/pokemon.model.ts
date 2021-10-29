export interface Pokemon {
  name: string
  type: string
  evolution: string
}

interface PokemonResult {
  name: string
  url: string
}

export interface PokemonListApiResponse {
  results: PokemonResult[];
}

interface PokemonType {
  type: {
    name: string;
  }
}

export interface PokemonApiResponse {
  name: string;
  types: PokemonType[];
  species: {
    url: string
  }
}

export interface SpeciesApiResponse {
  evolution_chain: {
    url: string;
  }
}

export interface EvolutionChainApiResponse {
  chain: {
    evolves_to: any[];
  }
}
