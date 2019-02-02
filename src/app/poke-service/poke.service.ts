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
          for ( let i = 0; i < stack.results.length; i++ ) {
            delete stack.results[ i ].url;
            Object.assign( stack.results[ i ], { id: i + 1 } );
          }
          return this.arrayPokeNameId = stack.results;
        } );
    }
  }

  getData( url: string ): Promise<object> {
    return this.http.get( `${ url }` ).toPromise();
  }

  setPokeFavorites( fav: number ): void {
    /* Pokémon "id" not exist in pokeFavorites? then push pokémon "id" */
    this.pokeFavorites.includes( fav )
      ? this.pokeFavorites
        .splice( this.pokeFavorites
          .indexOf( fav ), 1 )
      : this.pokeFavorites
        .push( fav ); this.pokeFavorites
          .sort( ( a, b ) => a - b );
  }
}



