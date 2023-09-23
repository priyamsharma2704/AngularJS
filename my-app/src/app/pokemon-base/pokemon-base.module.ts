import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonBasePokemonListComponent } from '../pokemon-base.pokemon-list/pokemon-base.pokemon-list.component';



@NgModule({
  declarations: [
    PokemonBasePokemonListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonBasePokemonListComponent
  ]
})
export class PokemonBaseModule { }
