<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit} from '@angular/core';
>>>>>>> origin/master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
export class LoginComponent implements OnInit {

  constructor() { }

  enviarForm(evt){
    
  }

=======

export class LoginComponent implements OnInit {

  admin:boolean;

  constructor() { }
  
  iniUser(evt){
    this.admin = false;
  }

  iniAdmin(evt){
    this.admin = true;
  }

  /*valIni(evt, input){
    if(input="admin"){
      this.admin = true;
    }else{
      this.admin = false;
    }
  }*/

>>>>>>> origin/master
  ngOnInit() {
  }

}
