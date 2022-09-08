import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component'
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component'
import { ContenedorPokemonComponent } from './components/contenedor-pokemon/contenedor-pokemon.component'



@NgModule({
  declarations: [
    DetallePokemonComponent,
    ListadoPokemonComponent,
    ContenedorPokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }
