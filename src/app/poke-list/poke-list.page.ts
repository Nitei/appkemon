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
  url = 'https://pokeapi.co/api/v2/pokemon/';
  urlAvatar = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor ( private route: ActivatedRoute, private servicio: PokeService ) { }

  ngOnInit() {
    this.servicio.getData( this.url ).subscribe( data => {
      this.lista = data;
      console.log( data );
    } );
  }

}
