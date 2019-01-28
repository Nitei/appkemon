import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class PokeService {

  public pokeFavorites = [];
  public arrayPokeNameId: object[];

  constructor ( private http: HttpClient ) { }

  getDataWithId( url: string ): Promise<Array<object>> {
    if ( this.arrayPokeNameId === undefined ) {
      return this.http.get( `${ url }` )
        .toPromise()
        .then( items => {
          // We just need the array of pokemons names and ids.
          const infoResults = items.results; // <- exist in RUNTIME.
          for ( let i = 0; i < infoResults.length; i++ ) {
            delete infoResults[ i ].url;
            Object.assign( infoResults[ i ], { id: i + 1 } );
          }
          return this.arrayPokeNameId = infoResults;
        } );
    }
  }

  getData( url: string ): Promise<object> {
    return this.http.get( `${ url }` ).toPromise();
  }

  setPokeFavorites( fav: number ): void {
    // Comprueba si el número del pokémon existe en pokeFavorites.
    // Si existe lo elimina y sino existe lo agrega al array.
    if ( this.pokeFavorites.includes( fav ) ) {
      this.pokeFavorites
        .splice( this.pokeFavorites
          .indexOf( fav ), 1 );
    } else {
      this.pokeFavorites
        .push( fav ); this.pokeFavorites
          .sort( ( a, b ) => a - b );
    }
  }
}



