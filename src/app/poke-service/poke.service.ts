import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class PokeService {

  public pokeFavorites = [];

  constructor ( private http: HttpClient ) { }

  getDataWithId( url: string ): Promise<object> {
    return this.http.get( `${ url }` )
      .toPromise()
      .then( items => {
        // El servidor envia "Object.results" que contiene las propiedades
        // "name" y "url" nosotros le agregaremos el "id" del pokémon.
        const infoResults = items.results; // <- RUNTIME.
        for ( let i = 0; i < infoResults.length; i++ ) {
          const obj = { id: i + 1 };
          Object.assign( infoResults[ i ], obj );
        }
        return items;
      } );
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



