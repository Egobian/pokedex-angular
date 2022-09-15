import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})

export class DetallePokemonComponent implements OnInit {


  constructor(public apiService: ApiService) { }

  ngOnInit(): void {}

}
