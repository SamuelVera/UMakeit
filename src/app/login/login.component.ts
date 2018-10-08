import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

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

  ngOnInit() {
  }

}
