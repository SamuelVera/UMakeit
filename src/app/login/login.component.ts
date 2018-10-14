import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

  user = {
    username: '',
    password: ''
  }

  path: String;

  constructor() { }

  logear(e){
      //Acceso del admin
    if(this.user.username === "admin" && this.user.password === "admin123"){
      this.path = "/home-admin";
    }else{  //Rutina de acceso de otro usuario
      this.path = "home";
    }
    console.log(this.path);
  }


  ngOnInit() {
  }

}
