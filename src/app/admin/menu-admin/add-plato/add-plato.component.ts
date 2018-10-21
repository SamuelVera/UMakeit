import { PlatoService } from './../../../plato.service';
import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/plato';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-plato',
  templateUrl: './add-plato.component.html',
  styleUrls: ['./add-plato.component.css']
})
export class AddPlatoComponent implements OnInit {

  plato: Plato = {
    nombre: '',
    precio: 0,
    personal: false,
    activo: false,
    image: '',
    contornos:[{
        nombre: '',
        carga: 0,
    }]
  };

  constructor(private platosService: PlatoService,
    private location: Location) { }

  ngOnInit() {
    
  }

  add(f: NgForm){
    if(this.plato.nombre != "" && this.plato.precio > 0){
      this.plato.image = "src";
      this.platosService.addPlato(this.plato);
    }else{
      console.log("Error al agregar plato");
    }
  }

  goBack(): void {
    this.location.back();
  }

}
