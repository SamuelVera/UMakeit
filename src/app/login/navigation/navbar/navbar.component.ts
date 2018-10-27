import { Router } from '@angular/router';
import { ClientesService } from './../../../core/clientes.service';
import { AuthService } from './../../../core/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/clases/cliente';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Cliente;

  constructor(public auth: AuthService) { 
  }

  ngOnInit() {
    
  }

  logout(){
    this.auth.logout();
  }

}
