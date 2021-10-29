import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {
  EvolutionChainApiResponse,
  Pokemon,
  PokemonApiResponse,
  PokemonListApiResponse,
  SpeciesApiResponse
} from "../models/pokemon.model";

@Injectable()
export class PokemonService {

  constructor(protected http: HttpClient) {}

  public getPokemons = (): Observable<string[]> => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=200`;
    return this.http.get<PokemonListApiResponse>(url).pipe(map(resp => {
      return resp.results.map(result => result.name);
    }));
  }

  public getPokemon = (name: string): Observable<Pokemon> => {
    return this.http.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon/${ name }/`).pipe(
      switchMap(pokemon => this.http.get<SpeciesApiResponse>(pokemon.species.url).pipe(
        switchMap(species => this.http.get<EvolutionChainApiResponse>(species.evolution_chain.url).pipe(
          map(chain => this.convertApiResponseToPokemon(pokemon, species, chain))
        ))
      ))
    );
  }

  private convertApiResponseToPokemon = (
    pokemon: PokemonApiResponse,
    species: SpeciesApiResponse,
    chain: EvolutionChainApiResponse): Pokemon => {
    return {
      name: pokemon.name,
      type: pokemon.types.length > 0 ? pokemon.types[0].type.name : '',
      evolution: chain.chain.evolves_to[0]?.evolves_to[0]?.species.name
    }
  }
}
