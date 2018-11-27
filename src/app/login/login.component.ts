import { Cliente } from './../clases/cliente';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../core/auth.service';

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
    cedula: 0,
    telefono: 0,
    dir: '',
    envios: [''],
    admin: false
  };
  pass: string;
  llenar: boolean = false;
  errMes1 = 'There is no user record corresponding to this identifier. The user may have been deleted.';
  errMes2 = 'The email address is badly formatted.';
  errMes3 = 'The password is invalid or the user does not have a password.';
  errMes4 = 'Faltan campos por llenar';
  errMes5 = 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.';

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.error = '';
  }

  login(e){
    if(this.user.email.length > 0 && this.pass.length > 0){
      this.auth.login(this.user.email,this.pass);
    }else{
      this.auth.error = 'Faltan campos por llenar';
    }
  }
}