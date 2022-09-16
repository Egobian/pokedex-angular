import { Component, OnInit } from '@angular/core'
import { EspeciePokemonResponse } from '../../models/especie-pokemon.model'
import { ListaPokemonResponse } from '../../models/lista-pokemon.model'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss']
})
export class ListadoPokemonComponent implements OnInit {

  listaPokemon: ListaPokemonResponse = {}
  pokemonSeleccionado: string = ""

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cargarListaPokemon()
  }

  cargarListaPokemon(): void {
    this.apiService.consultarListaPokemon().subscribe((response) =>
      this.listaPokemon = response
    )
  }

  seleccionarPokemon(nombre: string): void {
    this.apiService.consultarDetallePokemon(nombre).subscribe((response) =>
      this.apiService.detallePokemon = response
    )

    this.apiService.consultarEspeciePokemon(nombre).subscribe((response) =>
      this.asignarValores(response)
    )
  }

  asignarValores(response: EspeciePokemonResponse): void {
    this.apiService.especiePokemon = response
    this.apiService.descripcion = this.apiService.especiePokemon.flavor_text_entries?.find(elemento => elemento.language.name == "es")?.flavor_text
  }

}
