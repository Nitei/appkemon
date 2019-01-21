import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { PokeListPage } from '../poke-list/poke-list.page';
import { PokeStatsPage } from '../poke-stats/poke-stats.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(pokelist:pokelist)',
        pathMatch: 'full'
      },
      {
        path: 'pokelist',
        outlet: 'pokelist',
        component: PokeListPage,
      },
      {
        path: 'pokestats/:id/:nombre',
        outlet: 'pokelist',
        component: PokeStatsPage,
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(pokelist:pokelist)',
    pathMatch: 'full'
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class TabsPageRoutingModule { }
