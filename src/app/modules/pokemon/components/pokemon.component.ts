import { Component, Input } from '@angular/core';
import {Pokemon} from "../models/pokemon.model";


@Component({
  selector: 'pokemon-component',
  styleUrls: ['./pokemon.component.scss'],
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent {
  @Input() pokemon: Pokemon;

  constructor() {
  }

}
