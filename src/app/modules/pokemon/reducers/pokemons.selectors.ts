import * as fromModule from './';
import {createSelector} from "@ngrx/store";


export const getPokemonsState = createSelector(fromModule.getPokedexModuleState, state => state.pokemons);

export const list = createSelector(
  getPokemonsState,
  state => state.data ? state.data : []
);
