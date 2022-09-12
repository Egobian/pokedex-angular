import { Injectable } from '@angular/core'
import { Constantes } from '../utils/constantes'
import { HttpClient } from '@angular/common/http'
import { ListaPokemonResponse } from '../models/lista-pokemon.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public consultarListaPokemon(limitePokemon: number = 151): Observable<ListaPokemonResponse> {
     let urlConsulta = `${Constantes.apiUrl}pokemon?limit=${limitePokemon}`
     return this.http.get<ListaPokemonResponse>(urlConsulta)
  }

}
