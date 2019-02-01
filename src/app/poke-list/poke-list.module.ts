import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokeListPage } from './poke-list.page';

@NgModule( {
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [ PokeListPage ]
} )
export class PokeListPageModule { }
