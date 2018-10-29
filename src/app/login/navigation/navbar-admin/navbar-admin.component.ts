import { AuthService } from './../../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  toHome(){
    this.router.navigate(['/home-admin']);
  }

  toMenu(){
    this.router.navigate(['/menu-admin']);
  }

  toEnvios(){
    this.router.navigate(['/envios']);
  }

  logout(){
    this.auth.logout();
  }

}
