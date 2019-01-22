import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-stats',
  templateUrl: './poke-stats.page.html',
  styleUrls: [ './poke-stats.page.sass' ],
} )
export class PokeStatsPage implements OnInit {
  pokeId: string;
  pokeName: string;
  pokeData: object;

  constructor ( private route: ActivatedRoute, private servicio: PokeService ) { }

  ionViewWillEnter() {
    this.pokeId = this.route.snapshot.params.id;
    this.pokeName = this.route.snapshot.params.nombre;

    this.servicio.getData( `https://pokeapi.co/api/v2/pokemon/${ this.pokeId }` )
      .subscribe( data => { this.pokeData = data; } );
  }

  ngOnInit() {
  }

}
