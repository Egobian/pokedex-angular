import { Component, OnInit } from '@angular/core';
import { ListaPokemonResponse } from '../../models/lista-pokemon.model'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss']
})
export class ListadoPokemonComponent implements OnInit {

  listaPokemon: ListaPokemonResponse = {}

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cargarListaPokemon()
  }

  cargarListaPokemon(): void {
    this.apiService.consultarListaPokemon().subscribe((response) =>
      this.listaPokemon = response
    )
  }
  
}
