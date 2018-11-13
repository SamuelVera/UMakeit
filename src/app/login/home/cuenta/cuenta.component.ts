import { EnviosService } from './../../../core/envios.service';
import { Envio } from 'src/app/clases/envio';
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
  public envios: Envio[];
  private passConfirm: string = '';
  private pass: string = '';
  private validPass: boolean = false;
  private validConfirPass: boolean = false;
  private canAdvance: boolean = false;
  private cambiandoClave: boolean = false;
  envioReordenado: Envio;
  pos: number;

  constructor(public auth: AuthService,
    private clientesService: ClientesService,
    private enviosService: EnviosService) { }

  ngOnInit() {
    this.envioReordenado = null;
    this.cliente = null;
    this.getEnvios();
  }

  private getEnvios(){
    this.envios = [];
    this.clientesService.getCliente(this.auth.uid)
    .subscribe(data => {
      this.cliente = data[0];
      var i=0;
      while(i < this.cliente.envios.length){
        if(this.cliente.envios[i] != ""){
          this.enviosService.getEnvio(this.cliente.envios[i])
          .subscribe(data => {
            this.envios.push(data);
          });
        }
        i++;
      }
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

  pagar(envio: Envio, i: number){
    envio.pagada = true;
    this.enviosService.updateEnvio(envio);
    this.envios.splice(i,1);
  }

  reordenar(envio: Envio,i: number){
    this.envioReordenado = envio;
    this.pos = i;
  }

  ordenar(){
    this.calcPrecio();
    this.envioReordenado.owner_ref = "clientes/"+this.cliente.id;
    this.envioReordenado.direccion = this.cliente.direccion;
    this.envioReordenado.telefono = this.cliente.telefono;
    this.envioReordenado.cedula = this.cliente.cedula;
    this.envioReordenado.fecha = new Date();
    this.envioReordenado.confirmada = false;
    this.envios.splice(this.pos, 1);
    this.envioReordenado.pagada = false;
    this.envios.splice(this.pos, 1);
    const id = this.enviosService.addEnvio(this.envioReordenado);
    this.cliente.envios.push(id);
    this.clientesService.updateCliente(this.cliente);
    this.envioReordenado = null;
  }

  eliminarReorden(){
    this.envioReordenado = null;
  }

  private calcPrecio(){
    var i = 0;
    var j;
    this.envioReordenado.precio = 0;
    while(i < this.envioReordenado.platos.length){
      this.envioReordenado.precio += this.envioReordenado.platos[i].precio; // Precio del plato
      j = 0;
      while(j < this.envioReordenado.platos[i].contornos.length){
        if(this.envioReordenado.platos[i].contornos[j].elegido){
          this.envioReordenado.precio += this.envioReordenado.platos[i].contornos[j].carga; //Precio del añadido
        }
        j++;
      }
      i++;
    }
  }

  select(contorno){
    contorno.elegido = !contorno.elegido;
    this.calcPrecio();
  }

}


