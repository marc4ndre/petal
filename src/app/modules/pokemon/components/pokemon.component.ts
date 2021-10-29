import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon.model";


@Component({
  selector: 'pokemon-component',
  styleUrls: ['./pokemon.component.scss'],
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {}

  ngOnInit() {
    console.log(this.pokemon.chain);
  }

}
