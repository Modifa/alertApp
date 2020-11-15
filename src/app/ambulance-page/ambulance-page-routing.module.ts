import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbulancePagePage } from './ambulance-page.page';

const routes: Routes = [
  {
    path: '',
    component: AmbulancePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbulancePagePageRoutingModule {}
