import { PlatoService } from '../../../core/plato.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public platos = [];

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.platoService.getPlatos()
    .subscribe(data => {
      this.platos = data;
    })
  }

}
