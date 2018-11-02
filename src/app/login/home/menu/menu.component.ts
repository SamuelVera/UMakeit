import { Plato } from 'src/app/clases/plato';
import { Cliente } from './../../../clases/cliente';
import { PlatoService } from '../../../core/plato.service';
import { Component, OnInit, Injectable } from '@angular/core';
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
    owner: {
      email: '',
      displayName:'',
      cedula: '',
      telefono: '',
      direccion: '',
      envios:[],
      admin: false
    },
    fecha: new Date(),
    platos:[],
    confirmada: false
  };

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.getPlatos();
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

  agregar(plato: Plato){
    this.envio.platos.push(plato);
  }

  eliminar(i: number){
    this.envio.platos.splice(i,1);
  }

  ordenar(){
    
  }

}
