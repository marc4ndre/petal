import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {PokemonService} from "../services/pokemon.service";
import {PokemonsActions} from "../actions";

@Injectable()
export class PokemonsEffects {

  constructor(
    private actions$: Actions,
    private service: PokemonService,
  ) { }

  load$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(PokemonsActions.load),
    switchMap(({ page }) => this.service.getPokemons().pipe(
      map((names: string[]) => PokemonsActions.loaded({ names })),
      catchError(error => of(PokemonsActions.loadFailed({ error })))
    ))
  ));
}
