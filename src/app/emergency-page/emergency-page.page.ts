import { Location } from '@angular/common';
import { NavigationService } from '../services/navigation.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;
@Component({
  selector: 'app-emergency-page',
  templateUrl: './emergency-page.page.html',
  styleUrls: ['./emergency-page.page.scss'],
})
export class EmergencyPagePage  {
  map:any;
  longitude: any;
  latitube: any;
  isLoading: boolean = false;
  @ViewChild('map') myMap;
  constructor(
    private location: Location,
    private navigation: NavigationService
  ) { }

  ionViewWillEnter () {
    this.setupCoordinates();
}

plotLocationOnMap(latitude, longitube){
  this.map = new google.maps.Map(document.getElementById("map") ,{
  center: { lat: latitude, lng: longitube },
  zoom: 19,
 //
});
}

setupCoordinates(){
  this.isLoading = true;
  // Geolocation.watchPosition().subscribe(resp => {
  //   if(resp){
  //     this.isLoading = false;
  //     this.latitube = (resp as any).coords.latitude
  //     this.longitude = (resp as any).coords.longitude
  //     this.plotLocationOnMap(this.latitube,this.longitude)
  //     console.warn("resp watch Position",((resp as any).coords.latitude));
  //   }
  // },error => {
  //   console.log('Error getting location', error);
  //   this.isLoading = false;
  // })
  Geolocation.getCurrentPosition().then((resp) => {
    if(resp){
      this.isLoading = false;
      this.latitube = resp.coords.latitude
      this.longitude = resp.coords.longitude
      this.plotLocationOnMap(this.latitube,this.longitude)
      console.warn("resp.coords.longitude",resp.coords.longitude);
    }
   }).catch((error) => {
     console.log('Error getting location', error);
     this.isLoading = false;
   });
}

  back(){
   // this.location.back();
   this.navigation.navigateHome();
  }
    
  }

