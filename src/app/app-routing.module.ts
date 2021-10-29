import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexContainerComponent} from "./modules/pokemon/containers/pokedex.container.component";
import {PokemonContainerComponent} from "./modules/pokemon/containers/pokemon.container.component";

const routes: Routes = [
  { path: '', component: PokedexContainerComponent, canActivate: [ ] },
  { path: 'pokemon/:name', component: PokemonContainerComponent, canActivate: [ ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
