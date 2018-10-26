import { PlatoService } from '../../core/plato.service';
import { Plato } from '../../clases/plato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  public platos = [];
  private editState: boolean = false;
  private platoToEdit: Plato;
  private addingContorno: String;
  private cargaContorno: number;
  private last: boolean;

  constructor(private platoService: PlatoService) { }

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
      carga: this.cargaContorno
    });
  }
  
  updatePlato(plato: Plato){ //Actualizar información del plato
    if(plato.precio > 0 && plato.nombre != ""){
      this.platoService.updatePlato(plato);
      this.clearEditing();
    }else{
      console.log("Información inválida para el plato");
    }
  }

  addContorno(){ //Añadir un contorno al editar
    if(this.cargaContorno > 0 && this.addingContorno != ""){
      this.platoToEdit.contornos.push({
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
    this.platoToEdit.contornos.pop();
    if(this.last){
      this.platoToEdit.contornos.pop();
      this.last = false;
    }
  }

  clearEditing(){ //Clear state
    this.editState = false;
    this.platoToEdit = null;
  }

}
