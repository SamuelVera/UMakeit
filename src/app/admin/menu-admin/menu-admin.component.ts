import { PlatoService } from './../../plato.service';
import { Plato } from './../../plato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  todo: boolean = true;
  filtro: boolean = false;
  public platos = [];
  public filtrado: Plato;
  campo: String = '';

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.getPlatos();
  }

  private getPlatos(){
    this.platoService.getPlatos()
    .subscribe(data => {this.platos = data;})
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    else{
      var aux = new Plato();
      aux.nombre = name;
      this.platoService.addPlato(aux)
        .subscribe(plato => {
          this.platos.push(plato);
        });
    }
  }

  delete(plato: Plato): void{
    this.platos = this.platos.filter(p => p !== plato);
    this.platoService.deletePlato(plato).subscribe();
  }

  buscar(e){
    
  }

}
