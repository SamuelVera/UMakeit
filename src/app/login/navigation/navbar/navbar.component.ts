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

  private toHome(){
    this.router.navigate(['/home']);
  }

  private toMenu(){
    this.router.navigate(['/menu']);
  }

  private toUser(){
    this.router.navigate(['/user']);
  }

  private toHelp(){
    this.router.navigate(['/ayuda']);
  }

  private logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }

}
