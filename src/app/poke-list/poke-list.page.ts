import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../poke-service/poke.service';

@Component( {
  selector: 'app-poke-list',
  templateUrl: 'poke-list.page.html',
  styleUrls: [ 'poke-list.page.sass' ]
} )
export class PokeListPage implements OnInit {
  lista: object;

  constructor ( private route: ActivatedRoute, private servicio: PokeService ) {

  }

  ngOnInit() {
    this.servicio.getData( 'https://pokeapi.co/api/v2/pokemon/' ).subscribe( data => {
      console.log( data );
      this.lista = data;
    } );
  }

}
