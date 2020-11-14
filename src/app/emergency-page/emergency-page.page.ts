import { Component, OnInit } from '@angular/core';

declare var  google: any;
@Component({
  selector: 'app-emergency-page',
  templateUrl: './emergency-page.page.html',
  styleUrls: ['./emergency-page.page.scss'],
})
export class EmergencyPagePage implements OnInit {
map:any;
  constructor() { }

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map' ) ,{
    center: { lat: 45.518, lng: -122.672 },
    zoom: 18,
   //
  });}
    
  }

