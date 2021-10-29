export interface Pokemon {
  name: string
  type: string
  chain: EvolutionChain;
  imageUrl: string;
}

interface PokemonResult {
  name: string
  url: string
}

export interface PokemonListApiResponse {
  results: PokemonResult[];
}

export interface PokemonType {
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
  chain: EvolutionChain;
}

export interface EvolutionChain {
  species: {
    name: string;
  }
  evolves_to: any[];
}
