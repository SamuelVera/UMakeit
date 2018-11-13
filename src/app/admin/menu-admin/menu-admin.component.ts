import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PlatoService } from '../../core/plato.service';
import { Plato } from '../../clases/plato';
import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class MenuAdminComponent implements OnInit {

  public platos = [];
  private editState: boolean = false;
  private platoToEdit: Plato;
  private addingContorno: String;
  private cargaContorno: number;
  private last: boolean;
  campoText: string;

  private isFoto: boolean;
  private uploadTask: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;
  error: string = "";
  errorContorno: string = "";

  constructor(private platoService: PlatoService,
    private router: Router,
    private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.platoService.getPlatos()
    .subscribe(data => {
      this.platos = data;
    })
  }

  delete(event, plato: Plato){ //Borrar el plato
    this.platoService.deletePlato(plato);
  }

  edit(event, plato: Plato){ //Activar edición del plato
    this.editState = true;
    this.last = true;
    this.platoToEdit = plato;
    this.addingContorno = "";
    this.cargaContorno = 0; 
    this.platoToEdit.contornos.push({
      nombre: this.addingContorno,
      carga: this.cargaContorno,
      elegido: false
    });
  }
  
  updatePlato(plato: Plato){ //Actualizar información del plato
    if(plato.precio > 0 && plato.nombre != ""){
      plato.nombre = plato.nombre.toLowerCase();
      this.platoService.updatePlato(plato);
      this.clearEditing();
      this.error = "";
    }else{
      this.error = "Campos inválidos";
    }
  }

  addContorno(){ //Añadir un contorno al editar
    if(this.cargaContorno > 0 && this.addingContorno != ""){
      this.platoToEdit.contornos.push({
        nombre: this.addingContorno,
        carga: this.cargaContorno,
        elegido: false
      });
      this.addingContorno = "";
      this.cargaContorno = 0;
      this.errorContorno = "";
    }else{
      this.errorContorno = "Campos inválidos";
    }
  }

  deleteContorno(){//Eliminar un contorno del plato
    this.platoToEdit.contornos.pop();
    if(this.last){
      this.platoToEdit.contornos.pop();
      this.last = false;
    }
    this.errorContorno="";
  }

  clearEditing(){ //Clear state
    this.editState = false;
    this.platoToEdit = null;
    this.error = "";
  }

  goAdd(){
    this.router.navigate(['/menu-admin/add-plato']);
  }

  search(e){
    this.campoText = this.campoText.toLowerCase();
    this.platoService.searchPlatos(this.campoText)
    .subscribe(data  => {
      this.platos = data;
    });

  }

  uploadFoto(e: any){
    const file: File = e.target.files[0];
    const id = file.name;
    this.ref = this.afStorage.ref(id);
    this.uploadTask = this.ref.put(file);
    this.uploadProgress = this.uploadTask.percentageChanges();
    this.ref.getDownloadURL().subscribe(data =>{
      this.platoToEdit.image = data;
      this.isFoto = true;
      this.error = "";
    });
  }

}
