import * as fromModule from './';
import {createSelector} from "@ngrx/store";


export const getPokemonState = createSelector(fromModule.getPokedexModuleState, state => state.pokemon);

export const get = createSelector(
  getPokemonState,
  state => state.data ? state.data : null
);
