import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-favorites',
  templateUrl: './poke-favorites.page.html',
  styleUrls: [ './poke-favorites.page.sass' ],
} )
export class PokeFavoritesPage implements OnInit {
  arrayFavoritos: number[];
  pokeData: object;
  readonly offset = 0; // From pokémon number
  readonly limit = 8; // Until pokémon number

  readonly urlMas = `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=${ this.offset }&limit=${ this.limit }`;
  readonly urlAvatar = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor ( private servicio: PokeService ) { }

  ngOnInit() {
  }

  removeFav( fav: number ) {
    this.servicio.setPokeFavorites( fav );
  }

  ionViewWillEnter() {
    this.arrayFavoritos = this.servicio.pokeFavorites;
    this.pokeData = this.servicio.getData( this.urlMas );
  }

}
