import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-ambulance-page',
  templateUrl: './ambulance-page.page.html',
  styleUrls: ['./ambulance-page.page.scss'],
})
export class AmbulancePagePage implements OnInit {

  constructor(    private navigation: NavigationService
    ) { 

  }

  ngOnInit() {
  }
  back(){
   // this.location.back();
   this.navigation.navigateHome();
  }

}
