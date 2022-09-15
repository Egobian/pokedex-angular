import { Injectable } from '@angular/core'
import { Constantes } from '../utils/constantes'
import { HttpClient } from '@angular/common/http'
import { ListaPokemonResponse } from '../models/lista-pokemon.model'
import { Observable } from 'rxjs'
import { DetallePokemonResponse } from '../models/detalle-pokemon.model'
import { EspeciePokemonResponse } from '../models/especie-pokemon.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public detallePokemon: DetallePokemonResponse = {} 
  public especiePokemon: EspeciePokemonResponse = {} 
  public descripcion: string | undefined

  constructor(private http: HttpClient) { }

  public consultarListaPokemon(limitePokemon: number = 151): Observable<ListaPokemonResponse> {
    let urlConsulta = `${Constantes.apiUrl}pokemon?limit=${limitePokemon}`
    return this.http.get<ListaPokemonResponse>(urlConsulta)
  }

  public consultarDetallePokemon(nombre: string): Observable<DetallePokemonResponse>{
    let urlConsulta = `${Constantes.apiUrl}pokemon/${nombre}`
    return this.http.get<DetallePokemonResponse>(urlConsulta)
  }

  public consultarEspeciePokemon(nombre: string): Observable<EspeciePokemonResponse>{
    let urlConsulta = `${Constantes.apiUrl}pokemon-species/${nombre}`
    return this.http.get<EspeciePokemonResponse>(urlConsulta)
  }

}
