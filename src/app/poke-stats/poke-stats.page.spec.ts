import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeStatsPage } from './poke-stats.page';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe( 'PokeStatsPage', () => {
  let component: PokeStatsPage;
  let fixture: ComponentFixture<PokeStatsPage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ PokeStatsPage ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: 89 }
            }
          }
        } ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( PokeStatsPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
