export interface Pokemon {
  name: string
  type: string
  evolution: string
  imageUrl: string;
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
  sprites: {
    front_default: string;
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
