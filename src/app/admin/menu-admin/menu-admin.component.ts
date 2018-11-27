import { ConfirmationDialogService } from './../../confirm-dialog/confirm-dialog.service';
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
  public editState: boolean = false;
  private platoToEdit: Plato;
  private editingImage: string;
  private addingContorno: string;
  private cargaContorno: number;
  private last: boolean;
  private advance: boolean;
  campoText: string;

  private isFoto: boolean;
  private uploadTask: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;
  error: string = '';
  errorContorno: string = '';
  buscando: boolean;

  constructor(private platoService: PlatoService,
    private router: Router,
    private afStorage: AngularFireStorage,
    private confirmDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.buscando = false;
    this.platoService.getPlatos()
    .subscribe(data => {
      this.platos = data;
    })
  }

  delete(plato: Plato){ //Borrar el plato
    this.platoService.deletePlato(plato);
  }

  confirmElminar(plato: Plato) {
    this.confirmDialogService.confirm('¿Estas Seguro?', '¿Se va a elminar un plato?')
    .then((confirmed) => {
      if(confirmed){
        this.delete(plato)
      }})
    .catch(() => {});
  }

  edit(event, plato: Plato){ //Activar edición del plato
    this.editState = true;
    this.last = true;
    this.advance = true;
    this.platoToEdit = plato;
    this.addingContorno = '';
    this.cargaContorno = 0; 
    this.platoToEdit.contornos.push({
      nombre: this.addingContorno,
      carga: this.cargaContorno,
      elegido: false
    });
    this.editingImage = plato.image;
  }
  
  updatePlato(plato: Plato){ //Actualizar información del plato
    if(this.advance){
      if(plato.precio > 0 && plato.nombre != ''){
        plato.nombre = plato.nombre.toLowerCase();
        var i: number = 0;
        while(i < plato.contornos.length){
          if(plato.contornos[i].carga === 0){
            plato.contornos.splice(i,1);
          }
          i++;
        }
        plato.image = this.editingImage;
        this.platoService.updatePlato(plato);
        this.clearEditing();
      }else{
        this.error = 'Campos inválidos';
      }
    }else{
      this.error = 'Se está cargando una imágen';
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
    this.errorContorno='';
  }

  clearEditing(){ //Clear state
    this.editState = false;
    this.platoToEdit = null;
    this.error = '';
    this.editingImage = '';
  }

  goAdd(){
    this.router.navigate(['/menu-admin/add-plato']);
  }

  search(e){
    this.buscando = true;
    var aux = this.campoText.toLowerCase();
    this.platoService.searchPlatos(aux)
    .subscribe(data  => {
      this.platos = [];
      var i=0;
      while(i<data.length){
        if(data[i].activo){
          this.platos.push(data[i]);
        }
        i++;
      }
    });
    if(aux.length == 0){
      this.buscando = false;
    }
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
          this.editingImage = data;
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
