import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexContainerComponent} from "./modules/pokemon/containers/pokedex.container.component";

const routes: Routes = [
  { path: '', component: PokedexContainerComponent, canActivate: [ ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
