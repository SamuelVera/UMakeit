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
  addingContorno: string;
  cargaContorno: number;
  isFoto: boolean;
  private uploadTask: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;
  error: string = "";
  errorContorno: string = "";
  private advance: boolean;

  constructor(private platosService: PlatoService,
    private location: Location,
    private router: Router,
    private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.advance = true;
  }

  add(f: NgForm){ //Añadir un plato con los datos especificados
    if(this.advance){
      if(this.plato.nombre != '' && this.plato.precio > 0 && this.isFoto){
        this.plato.nombre = this.plato.nombre.toLowerCase();
        this.error = '';
        this.platosService.addPlato(this.plato);
        this.router.navigate(['/menu-admin']);
      }else{
        this.error = 'Campos inválidos';
      }
    }else{
      this.error = 'Se está cargando una imágen';
    }
  }

  goBack(){
    this.router.navigate(['/menu-admin']);
  }

  addContorno(){ //Añadir un contorno al editar
    if(this.cargaContorno > 0 && this.addingContorno != ''){
      this.plato.contornos.push({
        nombre: this.addingContorno,
        carga: this.cargaContorno,
        elegido: false
      });
      this.addingContorno = '';
      this.cargaContorno = 0;  
      this.errorContorno = '';
    }else{
      this.errorContorno = 'Campos inválidos';
    }
  }

  deleteContorno(){//Eliminar un contorno del plato
    this.plato.contornos.pop();
    this.errorContorno = "";
  }

  uploadFoto(e: any){
    const file: File = e.target.files[0];
    if(file){
      if(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg'){
        this.advance = false;
        const id = 'menu-images/'+file.name;
        this.ref = this.afStorage.ref(id);
        this.uploadTask = this.ref.put(file);
        this.uploadProgress = this.uploadTask.percentageChanges();
        this.ref.getDownloadURL().subscribe(data =>{
          this.plato.image = data;
          this.isFoto = true;
          this.error = '';
          this.advance = true;
        });
      }else{
        this.error = 'El archivo no es una imágen';
      }
    }else{
      this.error = '';
    }
  }
}
