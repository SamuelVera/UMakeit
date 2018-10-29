import { Observable } from 'rxjs';
import { Cliente } from '../../../clases/cliente';
import { AuthService } from './../../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/core/clientes.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  public cliente: Cliente;
  private aux: Observable<Cliente[]>;
  private email: string;
  private passConfirm: string = '';
  private pass: string = '';
  private validPass: boolean = false;
  private validConfirPass: boolean = false;
  private canAdvance: boolean = false;
  private cambiandoClave: boolean = false;

  constructor(public auth: AuthService,
    private clientesService: ClientesService) { }

  ngOnInit() {
    this.auth.uid.subscribe(data => {
      this.email = data;
      this.aux = this.clientesService.getCliente(this.email) as Observable<Cliente[]>;
      this.aux.subscribe(data =>{
        this.cliente = data[0];
      })
    });
  }

  advance(e){
    if((!this.validConfirPass) && (!this.validPass)){
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
    this.advance(e);
  }

  setCambiarTrue(){
    this.cambiandoClave = true;
  }

  cambiarClave(){
    if(this.advance){
      console.log("cambia")
    }
  }

}


