import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

declare var  google: any;
@Component({
  selector: 'app-emergency-page',
  templateUrl: './emergency-page.page.html',
  styleUrls: ['./emergency-page.page.scss'],
})
export class EmergencyPagePage  {
  map:any;
  constructor(
    private location: Location,
    private navigation: NavigationService
  ) { }

  ionViewWillEnter () {
    this.map = new google.maps.Map(document.getElementById('map' ) ,{
    center: { lat: 45.518, lng: -122.672 },
    zoom: 18,
   //
  });}

  back(){
   // this.location.back();
   this.navigation.navigateHome();
  }
    
  }

