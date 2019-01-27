import { Component } from '@angular/core';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-list',
  templateUrl: 'poke-list.page.html',
  styleUrls: [ 'poke-list.page.sass' ]
} )
export class PokeListPage {
  private lista: object;
  private readonly offset = 0; // From pokémon number
  private readonly limit = 807; // Until pokémon number
  private readonly urlMas = `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=${ this.offset }&limit=${ this.limit }/`;

  constructor ( private servicio: PokeService ) { }

  setFavorite( fav ): void {
    this.servicio.setPokeFavorites( fav );
  }

  ionViewWillEnter(): void {
    if ( this.lista === undefined ) {
      this.servicio.getDataWithId( this.urlMas )
        .then( x => { this.lista = x; console.log( x ); } );
    }
  }
}

