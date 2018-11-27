import { ConfirmationDialogService } from './../../../confirm-dialog/confirm-dialog.service';
import { EnviosService } from './../../../core/envios.service';
import { Envio } from 'src/app/clases/envio';
import { Cliente } from '../../../clases/cliente';
import { AuthService } from './../../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/core/clientes.service';

declare let paypal:any;

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})

export class CuentaComponent implements OnInit {

  public cliente: Cliente;
  public envios: Envio[];
  passConfirm: string = '';
  newPass: string = '';
  validPass: boolean = false;
  validConfirPass: boolean = false;
  canAdvance: boolean = false;
  cambiandoClave: boolean = false;
  envioReordenado: Envio;
  pos: number;

  pagando: boolean;
  ordenando: boolean;
  viendo: boolean;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  impuestos: number;
  total: number;
  dirPago: string;

  paypalConfig = {
    env:'sandbox',
    client:{
      sandbox: 'AZLQoirNWCHZM05je0pi0cPrKTmL9XJmfVVzpa5SducLULNI91Ii0AOxQt9BNeWWLAMblzOM-JDVwCIR',
      production: '<insert-production-client-id>'
    },
    commit: true,
    payment: (data, actions)=>{
      return actions.payment.create({
        payment:{
          transactions: [{
            amount: { total: this.envioReordenado.precio, currency: 'USD' }
          }]
        }
      });
    },
    onAuthorize: (data, actions)=>{
      this.envioReordenado.owner_ref = "clientes/"+this.cliente.id;
      this.envioReordenado.telefono = this.cliente.telefono;
      this.envioReordenado.cedula = this.cliente.cedula;
      this.envioReordenado.fecha = new Date();
      this.envioReordenado.confirmada = false;
      this.envios.splice(this.pos, 1);
      const id = this.enviosService.addEnvio(this.envioReordenado);
      this.cliente.envios.push(id);
      this.clientesService.updateCliente(this.cliente);
      this.envioReordenado = null;
      this.pagando = false;
      this.ordenando = false;
      this.viendo = false;
    }
  };

  constructor(public auth: AuthService,
    private clientesService: ClientesService,
    private enviosService: EnviosService,
    private confirmDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.viendo = false;
    this.ordenando = false;
    this.pagando = false;
    this.envioReordenado = null;
    this.cliente = null;
    this.getEnvios();
  }

  private addPaypalButton(){
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig, '#paypal-button-container');
        this.paypalLoad = false;
      })
    }
  }

  verOrdenes(){
    this.viendo = true;
  }

  volverDeVer(){
    this.viendo = false;
  }

  private addPaypalScript(){
    if(!this.addScript){
      this.addScript = true;
      return new Promise((resolve, reject)=>{
        let scripttagElement = document.createElement('script');
        scripttagElement.src='https://www.paypalobjects.com/api/checkout.js';
        scripttagElement.onload = resolve;
        document.body.appendChild(scripttagElement);
      })
    }
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
    if(this.newPass != this.passConfirm){
      this.validConfirPass = true;
    }else{
      this.validConfirPass = false;
    }
    this.advance(e);
  }

  validarPass(e){
    if(this.newPass.length < 8){
      this.validPass = true;
    }else{
      this.validPass = false;
    }
    this.validarConfirPass(e);
    this.advance(e);
  }

  setCambiarTrue(){
    this.cambiandoClave = true;
  }

  cambiarClave(){
    if(this.advance){
      this.confirmDialogService.confirm('¿Estas Seguro?', '¿Deseas cambiar tu contraseña?')
      .then((confirmed) => {
        if(confirmed){
          this.auth.changePassword(this.newPass);
          if(this.auth.error == ''){
            this.cambiandoClave = false;
          }
        }})
      .catch(() => {});
    }
  }

  reordenar(envio: Envio, i: number){
    this.envioReordenado = envio;
    this.pos = i;
    this.ordenando = true;
  }

  eliminarReorden(){
    this.ordenando = false;
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
    this.impuestos = this.envioReordenado.precio * 0.12;
    this.total = this.envioReordenado.precio + this.impuestos;
  }

  select(contorno){
    contorno.elegido = !contorno.elegido;
    this.calcPrecio();
  }

  goToPagar(){
    this.calcPrecio();
    this.pagando = true;
    this.addPaypalButton();
    this.ordenando = false;
  }

  volverFromPago(){
    this.pagando = false;
    this.ordenando = true;
    this.addScript = false;
    this.paypalLoad = true;
  }

  pagarSimul(){
    this.envioReordenado.owner_ref = "clientes/"+this.cliente.id;
    this.envioReordenado.telefono = this.cliente.telefono;
    this.envioReordenado.cedula = this.cliente.cedula;
    this.envioReordenado.fecha = new Date();
    this.envioReordenado.confirmada = false;
    this.envios.splice(this.pos, 1);
    const id = this.enviosService.addEnvio(this.envioReordenado);
    this.cliente.envios.push(id);
    this.clientesService.updateCliente(this.cliente);
    this.envioReordenado = null;
    this.pagando = false;
    this.ordenando = false;
    this.viendo = false;
  }

}


