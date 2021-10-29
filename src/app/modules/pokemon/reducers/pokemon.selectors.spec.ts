import { initialState } from './pokemon.reducer';
import * as select from './pokemon.selectors';
import {Pokemon} from "../models/pokemon.model";

describe('Selector: Pokemon', () => {
  it('selector isLoaded should return true when there is data', () => {
    const pokemon = {name: 'Pokemon1'} as Pokemon;
    const state = { ...initialState, data: pokemon };
    expect(select.get.projector(state)).toBe(pokemon);
  });
});
