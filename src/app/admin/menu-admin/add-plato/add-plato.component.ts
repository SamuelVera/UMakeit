import { Router } from '@angular/router';
import { PlatoService } from '../../../core/plato.service';
import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/clases/plato';
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

  addingContorno: String;
  cargaContorno: number;

  constructor(private platosService: PlatoService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    
  }

  add(f: NgForm){ //Añadir un plato con los datos especificados
    if(this.plato.nombre != "" && this.plato.precio > 0){
      this.plato.image = "src";
      this.platosService.addPlato(this.plato);
      this.router.navigate(["/menu-admin"]);
    }else{
      console.log("Error al agregar plato");
    }
  }

  goBack(): void {
    this.location.back();
  }

  addContorno(){ //Añadir un contorno al editar
    if(this.cargaContorno > 0 && this.addingContorno != ""){
      this.plato.contornos.push({
        nombre: this.addingContorno,
        carga: this.cargaContorno
      });
      this.addingContorno = "";
      this.cargaContorno = 0;  
    }else{
      console.log("Datos incorrectos");
    }
  }

  deleteContorno(){//Eliminar un contorno del plato
    this.plato.contornos.pop();
  }

}
