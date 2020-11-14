import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  showAlertTypes:boolean = false;
  
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  alert(){
    this.showAlertTypes = true;
  }
}
