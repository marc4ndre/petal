import { NgModule } from '@angular/core';
import {PokedexComponent} from "./components/pokedex.component";
import {PokedexContainerComponent} from "./containers/pokedex.container.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PokemonsEffects} from "./effects/pokemons.effects";
import {reducers} from "./reducers";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule} from "@angular/common";
import {PokemonService} from "./services/pokemon.service";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pokedex', reducers),
    EffectsModule.forFeature([PokemonsEffects]),
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule,
  ],
  declarations: [
    PokedexContainerComponent,
    PokedexComponent
  ],
  providers: [
    PokemonService
  ],
})
export class PokemonModule { }
