import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeStatsPage } from './poke-stats.page';


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ PokeStatsPage ]
} )
export class PokeStatsPageModule { }
