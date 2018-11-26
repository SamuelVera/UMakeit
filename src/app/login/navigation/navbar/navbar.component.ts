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

  constructor(public auth: AuthService,
    private router: Router) { 
  }

  ngOnInit() {
  }

  toHome(){
    this.router.navigate(['/home']);
  }

  toMenu(){
    this.router.navigate(['/menu']);
  }

  toUser(){
    this.router.navigate(['/user']);
  }

  toHelp(){
    this.router.navigate(['/ayuda']);
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }

}
