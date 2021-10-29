import { createAction, props } from '@ngrx/store';

export const load = createAction('[Pokemons] Load', props<{ page: number }>());
export const loaded = createAction('[Pokemons] Loaded',
  props<{ names: string[] }>()
);
export const loadFailed = createAction('[Pokemons] Failed',
  props<{ error: { } }>()
);
