import { EnviosService } from './../../../core/envios.service';
import { Observable } from 'rxjs';
import { ClientesService } from './../../../core/clientes.service';
import { AuthService } from './../../../core/auth.service';
import { Plato } from 'src/app/clases/plato';
import { Cliente } from './../../../clases/cliente';
import { PlatoService } from '../../../core/plato.service';
import { Component, OnInit, Injectable, enableProdMode } from '@angular/core';
import { Envio } from 'src/app/clases/envio';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public platos = [];
  campoText: string = '';
  
  envio: Envio = {
    id: '',
    owner_ref: '',
    precio: 0,
    fecha: new Date(),
    platos:[],
    direccion: '',
    confirmada: false,
    pagada: false,
    telefono: '',
    cedula: ''
  };

  aux: string;
  aux2: Observable<Cliente[]>;
  ordena: Cliente;

  constructor(private platoService: PlatoService,
    private authService: AuthService,
    private clientesService: ClientesService,
    private enviosService: EnviosService) { }

  ngOnInit() {
    this.getPlatos();
    this.authService.uid.subscribe(data =>{
      this.aux = data;
      this.aux2 = this.clientesService.getCliente(this.aux);
      this.aux2.subscribe(data => {
        this.ordena = data[0];
        console.log("Cliente fetched");
      })
    });
  }

  getPlatos(){
    this.platoService.getPlatos()
    .subscribe(data => {
      this.platos = data;
    })
  }

  search(e){
    console.log(this.campoText);
    this.platoService.searchPlatos(this.campoText)
    .subscribe(data  => {
      this.platos = data;
      console.log(this.platos);
    });
  }

    //Agregar plato a la orden
  agregar(plato: Plato){
    this.envio.platos.push(plato);
    this.calcPrecio();
  }

    //Eliminar plato de la orden
  eliminar(i: number){
    this.envio.platos.splice(i,1);
    this.calcPrecio();
  }

    //Confirmar la orden
  ordenar(){
    this.envio.owner_ref = "clientes/"+this.ordena.id;
    this.envio.direccion = this.ordena.direccion;
    this.envio.telefono = this.ordena.telefono;
    this.envio.cedula = this.ordena.cedula;
    this.envio.fecha = new Date();
    const id = this.enviosService.addEnvio(this.envio);
    this.ordena.envios.push(id);
    this.clientesService.updateCliente(this.ordena);
    this.envio.platos = [];
  }

  private calcPrecio(){
    var i = 0;
    var j;
    this.envio.precio = 0;
    while(i < this.envio.platos.length){
      this.envio.precio += this.envio.platos[i].precio; // Precio del plato
      j = 0;
      while(j < this.envio.platos[i].contornos.length){
        if(this.envio.platos[i].contornos[j].elegido){
          this.envio.precio += this.envio.platos[i].contornos[j].carga; //Precio del añadido
        }
        j++;
      }
      i++;
    }
  }

  select(contorno){
    contorno.elegido = !contorno.elegido;
  }

}
