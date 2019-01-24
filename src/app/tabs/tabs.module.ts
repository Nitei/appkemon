import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { PokeListPageModule } from '../poke-list/poke-list.module';
import { PokeStatsPageModule } from '../poke-stats/poke-stats.module';
import { PokeFavoritesPageModule } from '../poke-favorites/poke-favorites.module';

@NgModule( {
  imports: [
    PokeFavoritesPageModule,
    PokeStatsPageModule,
    PokeListPageModule,
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [ TabsPage ]
} )
export class TabsPageModule { }
