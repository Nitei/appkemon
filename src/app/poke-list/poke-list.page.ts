import { Component } from '@angular/core';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-list',
  templateUrl: 'poke-list.page.html',
  styleUrls: [ 'poke-list.page.sass' ]
} )
export class PokeListPage {
  private lista: any[];
  private searchbarHidden = false;
  private arrayFinded: object[];
  private readonly offset = 0; // From pokémon number
  private readonly limit = 807; // Until pokémon number
  private readonly urlMas = `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=${ this.offset }&limit=${ this.limit }`;

  constructor ( private servicio: PokeService ) { }

  ionViewWillEnter(): void {
    /*  To avoid calling the server every time the PokeList component's
    life cycle ends, I check if the data is already stored  */
    this.lista = this.servicio.arrayPokeNameId;
    if ( this.lista === undefined ) {
      this.servicio.getDataWithId( this.urlMas )
        .then( x => { this.lista = x; console.log( x ); console.log( 'Iniciando' ); } );
    }
  }

  setFavorite( fav ): void {
    this.servicio.setPokeFavorites( fav );
  }

  search( event ): void {
    let valueSearchbar: any = event.target.value.toLowerCase();
    valueSearchbar !== ''
      ? this.searchbarHidden = true
      : this.searchbarHidden = false;
    if ( !isNaN( valueSearchbar ) ) { valueSearchbar = Number( valueSearchbar ); }
    const searchResults = [];
    for ( const idx in this.lista ) {
      if ( this.lista.hasOwnProperty( idx ) ) {
        const pokemon = this.lista[ idx ];
        // We push the pokemon if it does not exist in the searchResults
        if ( pokemon.name.includes( valueSearchbar )
          || pokemon.id === ( valueSearchbar )
          && !searchResults.includes( valueSearchbar ) ) {
          searchResults.push( pokemon );
        }
      }
    }
    this.arrayFinded = searchResults;
  }
}

