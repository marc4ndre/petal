import * as fromReducer from './';
import {PokemonsActions} from "../actions";
import {ProcessStatus} from "../enum/process-status.enum";

describe('Reducer: Pokemons', () => {

  describe('Load', () => {
    it('Set status as processing', () => {
      const result = fromReducer.pokemons.reducer(fromReducer.pokemons.initialState, PokemonsActions.load({ page: 0 } ));
      expect(result.process.status).toBe(ProcessStatus.Processing);
    });

    it('removes any previous error', () => {
      const state = { ...fromReducer.pokemons.initialState,
        process: { ...fromReducer.pokemons.initialState.process,
          error: { code: 401 }
        }
      };
      const result = fromReducer.pokemons.reducer(state, PokemonsActions.load({ page: 1 }));
      expect(result.process.error).toBeNull();
    });

    it('removes any previous data', () => {
      const state = { ...fromReducer.pokemons.initialState,
        data: ['toto']
      };
      const result = fromReducer.pokemons.reducer(state, PokemonsActions.load({ page: 2 }));
      expect(result.data).toBeNull();
    });
  });

  describe('Loaded', () => {
    it('marks process status as completed when content is loaded', () => {
      const result = fromReducer.pokemons.reducer(fromReducer.pokemons.initialState, PokemonsActions.loaded({ names: ['name1'] }));
      expect(result.process.status).toBe(ProcessStatus.Completed);
    });

    it('pushes the payload in the data', () => {
      const payload: string[] = [ 'name1', 'name2' ];
      const result = fromReducer.pokemons.reducer(fromReducer.pokemons.initialState, PokemonsActions.loaded({ names: payload }));
      expect(result.data).toEqual(payload);
    });
  });

  describe('LoadFailed', () => {
    it('registers a load error', () => {
      const error = {};
      const result = fromReducer.pokemons.reducer(fromReducer.pokemons.initialState, PokemonsActions.loadFailed({ error }));
      expect(result.process.error).toBe(error);
    });

    it('marks process status as failed', () => {
      const error = {};
      const result = fromReducer.pokemons.reducer(fromReducer.pokemons.initialState, PokemonsActions.loadFailed({ error }));
      expect(result.process.status).toBe(ProcessStatus.Failed);
    });
  });
});
