import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { PlatoService } from '../../../core/plato.service';
import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/clases/plato';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';
import * as firebase from 'firebase';

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
        elegido: false
    }]
  };
  addingContorno: String;
  cargaContorno: number;
  isFoto: boolean;
  private uploadTask: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;

  constructor(private platosService: PlatoService,
    private location: Location,
    private router: Router,
    private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  add(f: NgForm){ //Añadir un plato con los datos especificados
    if(this.plato.nombre != "" && this.plato.precio > 0){
      this.plato.nombre.toLowerCase();
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
    if(this.cargaContorno > 0 && this.addingContorno != "" && this.isFoto){
      this.plato.contornos.push({
        nombre: this.addingContorno,
        carga: this.cargaContorno,
        elegido: false
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


  uploadFoto(e: any){
    const file: File = e.target.files[0];
    const id = file.name;
    this.ref = this.afStorage.ref(id);
    this.uploadTask = this.ref.put(file);
    this.uploadProgress = this.uploadTask.percentageChanges();
    this.ref.getDownloadURL().subscribe(data =>{
      this.plato.image = data;
      this.isFoto = true;
    });
  }

}
