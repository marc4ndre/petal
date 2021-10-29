import {Component, Input, OnInit} from '@angular/core';
import {EvolutionChain} from "../models/pokemon.model";


@Component({
  selector: 'pokemon-evo-component',
  templateUrl: './pokemon-evo.component.html'
})
export class PokemonEvoComponent implements OnInit {
  @Input() chain: EvolutionChain;

  constructor() {}

  ngOnInit() {
  }

}
