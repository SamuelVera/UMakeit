import { Cliente } from '../clases/cliente';
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
    password: '',
    telefono: '',
    direcciones:[
      {
        direccion: ''
      }
    ],
    ordenes: [
      {
        plato: {
          nombre: '',
          precio: 0,
          personal: false,
          activo: false,
          image: '',
          contornos:[{
            nombre: '',
            carga: 0,
          }]
        }
      }
    ]
  };
  path: String = "";
  valid: boolean = false;

  constructor(public auth: AuthService,
    private router: Router) { }
  
  ngOnInit() {
    this.path = "";
  }

  login(e){
    this.auth.login(this.user.email,this.user.password);
  }
}