import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-stats',
  templateUrl: './poke-stats.page.html',
  styleUrls: [ './poke-stats.page.sass' ],
} )
export class PokeStatsPage {
  private pokeId: string;
  private pokeDataFav: object;

  constructor ( private route: ActivatedRoute, private servicio: PokeService ) { }

  ionViewWillEnter(): void {
    this.pokeId = this.route.snapshot.params.id;

    this.servicio.getData( `https://pokeapi.co/api/v2/pokemon/${ this.pokeId }/` )
      .then( data => { this.pokeDataFav = data; } );
  }
}
