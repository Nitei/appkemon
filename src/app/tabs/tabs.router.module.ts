import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { PokeListPage } from '../poke-list/poke-list.page';

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
