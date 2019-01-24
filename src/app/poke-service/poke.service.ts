import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class PokeService {

  public pokeFavorites = [];

  constructor ( private http: HttpClient ) { }

  getData( url: string ): Observable<object> {
    return this.http.get( `${ url }` );
  }

  setPokeFavorites( fav: number ): void {
    // Comprueba si el número del pokémon existe en pokeFavorites.
    // Si existe lo elimina y sino existe lo agrega a el array.
    if ( this.pokeFavorites.includes( fav ) ) {
      this.pokeFavorites.splice( this.pokeFavorites.indexOf( fav ), 1 );
    } else {
      this.pokeFavorites.push( fav );
      this.pokeFavorites.sort( ( a, b ) => a - b );
    }
  }

}



