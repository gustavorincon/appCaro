import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavController } from '@ionic/angular';

import { InicioPage } from './inicio.page';
import { ComponentsModule } from '../../components/components.module';
import { saveConfig } from '@ionic/core';
import { ServiceGeneralService } from '../../services/service-general.service';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [InicioPage],
  providers:[ServiceGeneralService]
})
export class InicioPageModule {}
