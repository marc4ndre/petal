import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as pokemons from './pokemons.reducer';
import * as pokemon from './pokemon.reducer';

export interface PokedexModuleState {
  pokemons: pokemons.State;
  pokemon: pokemon.State;
}

export interface State {
  pokedex: PokedexModuleState;
}

export const reducers: ActionReducerMap<PokedexModuleState> = {
  pokemons: pokemons.reducer,
  pokemon: pokemon.reducer,
};

export const initialState = {
  pokemon: pokemon.initialState,
  pokemons: pokemons.initialState,
};

export { pokemons, pokemon };

export const getPokedexModuleState = createFeatureSelector<PokedexModuleState>('pokedex');

