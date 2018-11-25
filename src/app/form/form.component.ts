import { AuthService } from './../core/auth.service';
import { Cliente } from '../clases/cliente';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    //Cliente a agregar
  user: Cliente = {
    email: '',
    displayName:'',
    cedula: 0,
    telefono: 0,
    direccion:'',
    envios:[''],
    admin: false
  };

  dir: string = '';
  passConfirm: string = '';
  pass: string = '';
  validPass: boolean = false;
  validConfirPass: boolean = false;
  canAdvance: boolean = false;

  errMes1 = 'The email address is already in use by another account.';
  errMes2 = 'The email address is badly formatted.';
  errMes3 = 'Los campos son inválidos';
  errMes4 = 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.';


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.error = '';
    this.dir = '';
    this.passConfirm = '';
  }

  advance(e){
    if((!this.validConfirPass) && (!this.validPass) && (this.user.displayName!='') && 
    (this.user.cedula > 0) && (this.dir!='') && (this.user.email!='') && (this.user.telefono > 0)){
      this.canAdvance = true;
    }else{
      this.canAdvance = false;
    }
  }

  validarConfirPass(e){
    if(this.pass != this.passConfirm){
      this.validConfirPass = true;
    }else{
      this.validConfirPass = false;
    }
    this.advance(e);
  }

  validarPass(e){
    if(this.pass.length < 8){
      this.validPass = true;
    }else{
      this.validPass = false;
    }
    this.validarConfirPass(e);
    this.advance(e);
  }

  register(e, f: NgForm){
    if(this.canAdvance){
      this.user.direccion = this.dir;
      this.authService.signUp(this.user.email, this.pass, this.user);
    }else{
      this.authService.error = this.errMes3;
    }
  }
}
