import { createReducer, on } from '@ngrx/store';
import { PokemonsActions } from '../actions';
import {ProcessInterface} from "../models/process-interface.model";
import {ProcessStatus} from "../enum/process-status.enum";

export interface State {
  data: null | string[];
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
  on(PokemonsActions.load, (state) => ({ ...initialState,
    process: { ...initialState.process,
      action: PokemonsActions.load.type, status: ProcessStatus.Processing
    }
  })),

  on(PokemonsActions.loaded, (state, { names }) => ({ ...state,
    data: names,
    process: { ...state.process,
      status: ProcessStatus.Completed
    }
  })),

  on(PokemonsActions.loadFailed, (state, { error }) => ({ ...state,
    process: { ...state.process,
      status: ProcessStatus.Failed, error
    }
  })),
);
