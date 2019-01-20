import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-list',
  templateUrl: 'poke-list.page.html',
  styleUrls: [ 'poke-list.page.sass' ]
} )
export class PokeListPage implements OnInit {
  lista: object;
  offset = 0; // From pokémon number
  limit = 807; // Until pokémon number

  urlMas = `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=${ this.offset }&limit=${ this.limit }`;
  urlAvatar = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor ( private servicio: PokeService ) { }

  ngOnInit() {
    this.servicio.getData( this.urlMas )
      .subscribe( data => this.lista = data );
  }

}
