import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {Pokemon, PokemonList} from "../models/pokemon.model";

@Injectable()
export class PokemonService {

  constructor(protected http: HttpClient) {}

  public getPokemons = (): Observable<string[]> => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=200`;
    return this.http.get<PokemonList>(url).pipe(map(resp => {
      return resp.results.map(result => result.name);
    }));
  }

  // public getPokemon = (pokemonId: any): Observable<Pokemon[]> => {
  //   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  //   return this.http.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }/`).pipe(
  //     switchMap(pokemon => this.http.get<SpeciesApiResponse>(pokemon.species.url).pipe(
  //       switchMap(species => this.http.get<EvolutionChainApiResponse>(species.evolution_chain.url).pipe(
  //         map(chain => this.factory.toPokemonDetails(pokemon, species, chain))
  //       ))
  //     ))
  //   );
  // }
}
