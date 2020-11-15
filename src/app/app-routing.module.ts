import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
   
  },
  {
    path: '',
    redirectTo: 'emergencies',
    pathMatch: 'full'
  },
  {
    path: 'emergencies',
    loadChildren: () => import('./emergency-page/emergency-page.module').then( m => m.EmergencyPagePageModule)
  },
  {
    path: 'ambulance',
    loadChildren: () => import('./ambulance-page/ambulance-page.module').then( m => m.AmbulancePagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
