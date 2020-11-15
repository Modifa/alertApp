import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbulancePagePageRoutingModule } from './ambulance-page-routing.module';

import { AmbulancePagePage } from './ambulance-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbulancePagePageRoutingModule
  ],
  declarations: [AmbulancePagePage]
})
export class AmbulancePagePageModule {}
