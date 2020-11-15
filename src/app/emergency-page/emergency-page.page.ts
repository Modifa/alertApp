import { Location } from '@angular/common';
import { NavigationService } from '../services/navigation.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
    private navigation: NavigationService,
    public mediaCapture:MediaCapture,
    public socialSharing:SocialSharing,
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
      console.warn("resp.coords.latitute",resp.coords.latitude);

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
  
  CaptureAudio(){
    this.mediaCapture.captureAudio().then((audio:MediaFile[])=>{
      // this.ShareMedia("audio file","media capture", audio[0].fullPath,"");
    },(err)=>{
       alert(JSON.stringify(err));
    })
  }
//
  CaptureVideo(){
    this.mediaCapture.captureVideo().then((video:MediaFile[])=>{
      // this.ShareMedia("video file","media capture", video[0].fullPath,"");
    },(err)=>{
       alert(JSON.stringify(err));
    })
  }
//
  CaptureImage(){
    this.mediaCapture.captureImage().then((image:MediaFile[])=>{
      // this.ShareMedia("video image","media capture", image[0].fullPath,"");
    },(err)=>{
       alert(JSON.stringify(err));
    })
  }
//
  ShareMedia(message, subject, filepath, url){
    this.socialSharing.share(message, subject,filepath, url).then(()=>{

    },(err)=>{
      alert(JSON.stringify(err));
    });

  }
    
  }

