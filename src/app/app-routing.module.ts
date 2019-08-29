import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'tabs', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'calendario', loadChildren: './pages/calendario/calendario.module#CalendarioPageModule' },
  { path: 'citas', loadChildren: './pages/citas/citas.module#CitasPageModule' },
  { path: 'alarmas', loadChildren: './pages/alarmas/alarmas.module#AlarmasPageModule' },
  { path: 'informate', loadChildren: './pages/informate/informate.module#InformatePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
