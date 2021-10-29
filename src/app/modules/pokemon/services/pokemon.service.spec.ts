import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { hot } from 'jasmine-marbles';
import {PokemonService} from "./pokemon.service";
import {EvolutionChain, Pokemon, PokemonType} from "../models/pokemon.model";

describe('Service: PokemonService', () => {

  describe('getPokemons', () => {
    it('execute the process and return the action', () => {
      const results = [
        { name: 'pokemon1'},
        { name: 'pokemon2'},
      ]
      spies.get('httpGet').and.returnValue(of({ results }));
      const expected = hot('(a|)', {a: ['pokemon1', 'pokemon2']});
      expect(service.getPokemons()).toBeObservable(expected);
    });
  });

  describe('getPokemon', () => {
    it('execute the process and return the action', () => {
      const pokemonApiResponse = {
        name: 'pokemon1',
        types: [{type: {name: 'water'}} as PokemonType],
        species: {
          url: 'http://species/1'
        },
        sprites: {
          front_default: 'http://pokemonimage'
        }
      };

      const speciesApiResponse = {
        evolution_chain: {
          url: 'http://evolution-chain/1'
        }
      };

      const evolutionChainApiResponse = {
        chain: { species: { name: 'pokemon1'}, evolves_to: []} as EvolutionChain
      };

      const pokemon = {
        name: 'pokemon1',
        type: 'water',
        chain: { species: { name: 'pokemon1'}, evolves_to: []} as EvolutionChain,
        imageUrl: 'http://pokemonimage'
      } as Pokemon;

      spies.get('httpGet').and.returnValues(
        of(pokemonApiResponse),
        of(speciesApiResponse),
        of(evolutionChainApiResponse),
      );
      const expected = hot('(a|)', {a: pokemon});
      expect(service.getPokemon('pokemon1')).toBeObservable(expected);
    });
  });

  let service: PokemonService;
  const spies: Map<string, any> = new Map<string, any>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PokemonService ]
    });
    service = TestBed.inject(PokemonService);
    spies.set('httpGet', spyOn(HttpClient.prototype, 'get'));
  });
});
