import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  stdNumber = '1234567890987';
  name = 'Tebogo';
  password = 'Tebogo';

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      stdNumber: ['',[Validators.required,Validators.minLength(12), Validators.maxLength(12)]],
      name: ['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(5)]],
    })
  }
  authenticate(){
    var canLogin: boolean= false;
    
  }

}
