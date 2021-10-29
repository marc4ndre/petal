import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {PokemonService} from "../services/pokemon.service";
import {PokemonActions} from "../actions";

@Injectable()
export class PokemonEffects {

  constructor(
    private actions$: Actions,
    private service: PokemonService,
  ) { }

  load$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(PokemonActions.load),
    switchMap(({ name }) => this.service.getPokemon(name).pipe(
      map((pokemon) => PokemonActions.loaded({ pokemon })),
      catchError(error => of(PokemonActions.loadFailed({ error })))
    ))
  ));
}
