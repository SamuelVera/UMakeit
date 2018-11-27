import { Cliente } from 'src/app/clases/cliente';
import { ClientesService } from './../core/clientes.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { COMPONENT_FACTORY_RESOLVER } from '@angular/core/src/render3/ng_module_ref';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
 
  user: Cliente;

  constructor(private router: Router,
    private authService: AuthService,
    private clientesService: ClientesService){
      this.clientesService.getCliente(this.authService.uid)
      .subscribe(data => {
        this.user = data[0];
      })
    }

  canActivate() {
    if(this.user.admin){
      return true;
    }else{
      this.router.navigate['/login'];
      return false;
    }
  }

}
