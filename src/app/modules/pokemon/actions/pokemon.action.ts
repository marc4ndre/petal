import { createAction, props } from '@ngrx/store';
import { Pokemon } from "../models/pokemon.model";

export const load = createAction('[Pokemon] Load');
export const loaded = createAction('[Pokemon] Loaded',
  props<{ pokemon: Pokemon }>()
);
export const loadFailed = createAction('[Pokemon] Failed',
  props<{ error: { } }>()
);
