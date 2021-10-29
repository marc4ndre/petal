import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromReducer from '../reducers';
import {PokemonsActions} from "../actions";
import {Observable} from "rxjs";
import { selectors } from '../reducers/selectors';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.container.component.html'
})
export class PokedexContainerComponent implements OnInit {
  public names$: Observable<string[]>;

  constructor(private store: Store<fromReducer.State>) {
  }

  ngOnInit() {
    this.store.dispatch(PokemonsActions.load({page: 0}));
    this.names$ = this.store.select(selectors.pokemons.list);
  }

}
