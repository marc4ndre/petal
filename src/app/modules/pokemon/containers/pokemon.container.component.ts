import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromReducer from '../reducers';
import {PokemonActions} from "../actions";
import {ActivatedRoute} from "@angular/router";
import {selectors} from "../reducers/selectors";
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon.model";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.container.component.html'
})
export class PokemonContainerComponent implements OnInit {
  public pokemon$: Observable<Pokemon>;

  constructor(private route: ActivatedRoute, private store: Store<fromReducer.State>) {
  }

  ngOnInit() {
    this.store.dispatch(PokemonActions.load({name: this.route.snapshot.params['name']}));
    this.pokemon$ = this.store.select(selectors.pokemon.get);
  }

}
