import { Plato } from 'src/app/plato';
import { PlatoService } from './../../../plato.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.component.html',
  styleUrls: ['./editar-plato.component.css']
})
export class EditarPlatoComponent implements OnInit {

  public plato: Plato;
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private platoService: PlatoService,
    private location: Location
  ) {}

  ngOnInit(){
    this.getPlato();
  }

  private getPlato(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.platoService.getPlato(id)
    .subscribe(plato => this.plato = plato);
  }

  save(): void {
    this.platoService.updatePlato(this.plato)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
