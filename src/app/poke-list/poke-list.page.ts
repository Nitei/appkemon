import { Component } from '@angular/core';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-list',
  templateUrl: 'poke-list.page.html',
  styleUrls: [ 'poke-list.page.sass' ]
} )
export class PokeListPage {
  lista: object;
  search = false;
  readonly offset = 0; // From pokémon number
  readonly limit = 807; // Until pokémon number
  readonly urlMas = `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=${ this.offset }&limit=${ this.limit }/`;

  constructor ( private servicio: PokeService ) { }

  setFavorite( fav ) {
    this.servicio.setPokeFavorites( fav );
  }

  ionViewWillEnter() {
    this.servicio.getDataWithId( this.urlMas )
      .then( x => this.lista = x );
  }
}

