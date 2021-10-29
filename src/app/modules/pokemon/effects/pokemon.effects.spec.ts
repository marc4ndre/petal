import { Observable, of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { PokemonActions} from '../actions';
import {PokemonEffects} from "./pokemon.effect";
import {PokemonService} from "../services/pokemon.service";
import {EvolutionChain, Pokemon} from "../models/pokemon.model";

describe('Effects: Pokemon', () => {
  describe('load', () => {
    it('dispatches a updated action with the proper payload when it works', () => {
      const pokemon = {
          name: 'pokemon',
          type: 'type',
          chain: {species: {name: 'pokemon'}, evolves_to: []} as EvolutionChain,
          imageUrl: 'url'
      } as Pokemon;
      (<jasmine.Spy>service.getPokemon).and.returnValue(of(pokemon));

      actions = hot('--a-', { a: PokemonActions.load({ name: 'pokemon' }) });
      const expected = cold('--b', { b: PokemonActions.loaded({ pokemon }) });
      expect(effects.load$).toBeObservable(expected);
      expect(service.getPokemon).toHaveBeenCalledWith('pokemon');
    });

    it('dispatches a LoadFailed action with the proper payload when it fails', () => {
      const error = { code: 401 };
      (<jasmine.Spy>service.getPokemon).and.returnValue(throwError(error));

      actions = hot('--a-', { a: PokemonActions.load({ name: 'pokemon' }) });
      const expected = cold('--b', { b: PokemonActions.loadFailed({error}) });
      expect(effects.load$).toBeObservable(expected);
      expect(service.getPokemon).toHaveBeenCalledWith('pokemon');
    });
  });

  /* PRIVATE */

  let effects: PokemonEffects;
  let actions: Observable<any>;
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PokemonEffects, provideMockActions(() => actions), {
          provide: PokemonService,
          useValue: jasmine.createSpyObj('PokemonService', ['getPokemon'])
        }
      ]
    });

    effects = TestBed.inject(PokemonEffects);
    service = TestBed.inject(PokemonService);
  });
});
