import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import { HttpClientModule } from '@angular/common/http';

describe( 'PokeService', () => {
  beforeEach( () => TestBed.configureTestingModule( {
    imports: [ HttpClientModule ],
  } ) );

  it( 'should be created', () => {
    const service: PokeService = TestBed.get( PokeService );
    expect( service ).toBeTruthy();
  } );
} );
