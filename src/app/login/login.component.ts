import { Cliente } from './../clases/cliente';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

    //Cliente a pasar
  user: Cliente = {
    email: '',
    displayName:'',
    cedula: '',
    telefono: '',
    direccion: '',
    envios:[],
    admin: false
  };
  path: String;
  pass: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login(e){
    this.auth.login(this.user.email,this.pass);
  }
}