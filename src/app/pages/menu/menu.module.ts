import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path:'citas',
        loadChildren:'../citas/citas.module#CitasPageModule'
      },
      {
        path:'calendario',
        loadChildren:'../calendario/calendario.module#CalendarioPageModule'
      },
      {
        path:'alarmas',
        loadChildren:'../alarmas/alarmas.module#AlarmasPageModule'
      },
      {
        path:'informate',
        loadChildren:'../informate/informate.module#InformatePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
