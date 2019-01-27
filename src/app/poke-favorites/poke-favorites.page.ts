import { Component } from '@angular/core';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-favorites',
  templateUrl: './poke-favorites.page.html',
  styleUrls: [ './poke-favorites.page.sass' ],
} )
export class PokeFavoritesPage {
  private arrayFavoritos: number[];

  constructor ( private servicio: PokeService ) { }

  removeFav( fav: number ): void {
    this.servicio.setPokeFavorites( fav );
  }

  ionViewWillEnter(): void {
    this.arrayFavoritos = this.servicio.pokeFavorites;
  }

}
