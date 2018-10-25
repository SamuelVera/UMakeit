import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ClienteService} from './cliente.service'
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: ClienteService, private router: Router) {}


    //Determina si puede accederse más allá del login
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.auth.cliente.pipe(
           take(1),
           map(user => !!user),
           tap(loggedIn => {
             if (!loggedIn) {
               console.log('access denied')
               this.router.navigate(['/login']);
              }
            }))
  }
}
