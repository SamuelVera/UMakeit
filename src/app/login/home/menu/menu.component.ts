import { Observable } from 'rxjs';
import { PlatoService } from './../../../plato.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Plato } from 'src/app/plato';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public platos = [];

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.getPlatos();
  }

  private getPlatos(){
    this.platoService.getPlatos()
    .subscribe(data => {this.platos = data;})
  }

}
