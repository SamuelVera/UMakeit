import { PlatoService } from './../../plato.service';
import { Plato } from './../../plato';
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

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.platoService.getPlatos()
    .subscribe(data => {
      this.platos = data;
    })
  }

  delete(event, plato: Plato){
    this.platoService.deletePlato(plato);
  }

  edit(event, plato: Plato){
    this.editState = true;
    this.platoToEdit = plato;
  }
  
  updatePlato(plato: Plato){
    this.platoService.updatePlato(plato);
    this.clearEditing();
  }

  clearEditing(){
    this.editState = false;
    this.platoToEdit = null;
  }

  addContorno(){
    this.platoToEdit.contornos.push({
      nombre: this.addingContorno,
      carga: this.cargaContorno
    });
    this.addingContorno = "";
    this.cargaContorno = 0;
  }

  deleteContorno(){
    this.platoToEdit.contornos.pop();
  }

}
