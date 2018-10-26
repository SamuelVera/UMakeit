import { AuthService } from './../../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
