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
import {PokemonContainerComponent} from "./containers/pokemon.container.component";
import {RouterModule} from "@angular/router";
import {PokemonEffects} from "./effects/pokemon.effect";
import {PokemonComponent} from "./components/pokemon.component";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pokedex', reducers),
    EffectsModule.forFeature([PokemonsEffects, PokemonEffects]),
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
  ],
  declarations: [
    PokedexContainerComponent,
    PokedexComponent,
    PokemonContainerComponent,
    PokemonComponent
  ],
  providers: [
    PokemonService
  ],
})
export class PokemonModule { }
