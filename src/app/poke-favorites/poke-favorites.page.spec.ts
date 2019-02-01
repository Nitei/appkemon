import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFavoritesPage } from './poke-favorites.page';
import { HttpClientModule } from '@angular/common/http';

describe( 'PokeFavoritesPage', () => {
  let component: PokeFavoritesPage;
  let fixture: ComponentFixture<PokeFavoritesPage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ PokeFavoritesPage ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( PokeFavoritesPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
