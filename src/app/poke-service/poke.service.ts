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
          const stack: any = items;
          const infoResults = stack.results;
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
    /* If the pokémon "id" already not exist in the array of favorites push the pokémon "id" */
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



