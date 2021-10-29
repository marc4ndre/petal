import { createReducer, on } from '@ngrx/store';
import { PokemonActions } from '../actions';
import { Pokemon } from "../models/pokemon.model";
import { ProcessInterface } from "../models/process-interface.model";
import { ProcessStatus } from "../enum/process-status.enum";

export interface State {
  data: null | Pokemon;
  process: ProcessInterface;
}

export const initialState: State = {
  data: null,
  process: {
    error: null,
    entity: null,
    action: null,
    status: ProcessStatus.Normal
  }
};

export const reducer = createReducer(initialState,
  on(PokemonActions.load, (state) => ({ ...initialState,
    process: { ...initialState.process,
      action: PokemonActions.load.type, status: ProcessStatus.Processing
    }
  })),

  on(PokemonActions.loaded, (state, { pokemon }) => ({ ...state,
    data: pokemon,
    process: { ...state.process,
      status: ProcessStatus.Completed
    }
  })),

  on(PokemonActions.loadFailed, (state, { error }) => ({ ...state,
    process: { ...state.process,
      status: ProcessStatus.Failed, error
    }
  })),
);
