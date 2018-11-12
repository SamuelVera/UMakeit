import { AuthService } from './../core/auth.service';
import { Cliente } from '../clases/cliente';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
    cedula: '',
    telefono: '',
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

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.dir = '';
    this.passConfirm = '';
  }

  advance(e){
    if((!this.validConfirPass) && (!this.validPass) && (this.user.displayName!="") && 
    (this.user.cedula!="") && (this.dir!="") && (this.user.email!="") && (this.user.telefono!="")){
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
      console.log("Campos llenos");
      this.authService.signUp(this.user.email, this.pass, this.user);
    }else{
      console.log("Campos inválidos");
    }
  }
}
