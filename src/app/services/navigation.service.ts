import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public home = "home";
  public emergencies = "emergencies"
  constructor(
    private router: Router
  ) { }

  private navigate(route){
    this.router.navigate([route]);
  }

  public navigateToEmergency = function(){
    this.navigate(this.emergencies);
  }
  
  public navigateHome = function() {
    this.navigate(this.home);
  }
}
