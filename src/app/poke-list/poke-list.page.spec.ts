import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListPage } from './poke-list.page';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe( 'PokeListPage', () => {
  let component: PokeListPage;
  let fixture: ComponentFixture<PokeListPage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ PokeListPage ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    } ).compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( PokeListPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
