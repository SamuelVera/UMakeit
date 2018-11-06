import { EnviosService } from './../../../core/envios.service';
import { Envio } from 'src/app/clases/envio';
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
  public envios: Envio[] = [];
  private aux: Observable<Cliente[]>;
  private email: string;
  private passConfirm: string = '';
  private pass: string = '';
  private validPass: boolean = false;
  private validConfirPass: boolean = false;
  private canAdvance: boolean = false;
  private cambiandoClave: boolean = false;

  constructor(public auth: AuthService,
    private clientesService: ClientesService,
    private enviosService: EnviosService) { }

  ngOnInit() {
    this.envios = [];
    this.auth.uid.subscribe(data => {
      this.email = data;
      this.aux = this.clientesService.getCliente(this.email) as Observable<Cliente[]>;
      this.getEnvios();
    });
  }

  private getEnvios(){
    this.aux.subscribe(data =>{
      this.cliente = data[0];
      this.enviosService.getEnviosOfCliente(this.cliente.id)
      .subscribe(data =>{
        this.envios = data;
      });
    })
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

  pagar(envio: Envio, i: number){
    envio.pagada = true;
    this.enviosService.updateEnvio(envio);
  }

  reordenar(envio: Envio){
    var aux: Envio;
    aux = envio;
    aux.id = '';
    aux.fecha = new Date();
    aux.confirmada = false;
    aux.pagada = false;
    const id = this.enviosService.addEnvio(aux);
    this.cliente.envios.push(id);
    this.clientesService.updateCliente(this.cliente);
  }

}


