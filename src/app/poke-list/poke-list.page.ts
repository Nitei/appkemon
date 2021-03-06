import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-list',
  templateUrl: 'poke-list.page.html',
  styleUrls: [ 'poke-list.page.sass' ]
} )
export class PokeListPage implements OnInit {
  lista: object;
  readonly offset = 0; // From pokémon number
  readonly limit = 807; // Until pokémon number

  readonly urlMas = `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=${ this.offset }&limit=${ this.limit }`;
  readonly urlAvatar = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor ( private servicio: PokeService ) { }

  favorite( fav ) {
    this.servicio.setPokeFavorites( fav );
  }

  ngOnInit() {
    this.servicio.getData( this.urlMas )
      .subscribe( data => this.lista = data );
  }

}
