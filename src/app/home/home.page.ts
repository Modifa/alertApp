import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showAlertTypes:boolean = false;
  
  constructor(
    private navigation: NavigationService
  ) {}
  
  ionViewWillEnter () {
    this.showAlertTypes = false;
  }
  alert(){
    this.showAlertTypes = true;
  }
  getEmergencyServices(){
    this.navigation.navigateToEmergency();
  }
  getAmbulance(){
    this.navigation.natigateToAmbulance();
  }
//
}
