import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component'
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    DetallePokemonComponent,
    ListadoPokemonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DetallePokemonComponent,
    ListadoPokemonComponent
  ]
})
export class PokedexModule { }
