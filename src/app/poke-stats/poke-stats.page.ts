import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-stats',
  templateUrl: './poke-stats.page.html',
  styleUrls: [ './poke-stats.page.sass' ],
} )
export class PokeStatsPage {
  pokeId: string;
  pokeName: string;
  pokeDataFav: object;

  constructor ( private route: ActivatedRoute, private servicio: PokeService ) { }

  ionViewWillEnter() {
    this.pokeId = this.route.snapshot.params.id;
    this.pokeName = this.route.snapshot.params.nombre;

    this.servicio.getData( `https://pokeapi.co/api/v2/pokemon/${ this.pokeId }/` )
      .then( data => { this.pokeDataFav = data; } );
  }
}
