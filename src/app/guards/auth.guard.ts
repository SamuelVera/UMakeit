import { AuthService } from './../core/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router,
    private authService: AuthService){
  }

  canActivate() {
    if(this.authService.fauth.auth.currentUser !== null){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
