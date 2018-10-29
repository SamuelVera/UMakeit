import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ClientesService } from './clientes.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Cliente } from '../clases/cliente';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    //Retrieve email
  uid = this.fauth.authState.pipe(map(
    authState => {
      if(!authState){
        return null;
      }else{
        return authState.email}
      }
  ));

  constructor(public fauth: AngularFireAuth,
    private clientesService: ClientesService,
    private router: Router
    ) { 
  }

  login(email: string, password: string){
    this.fauth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log("Login succesful");
      if(email === "admin@umakeit.com"){
        this.router.navigate(['/home-admin']);
      }else{
        this.router.navigate(['/home']);
      }
    }).catch(err => {
      console.log("Error al iniciar sesión: ",err.message);
    })
  }

    //Metódo de signup con el email y el password
  signUp(email: string, password: string, user:Cliente){
    this.fauth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log("User added");
      this.clientesService.addCliente(user);
      this.router.navigate(['/home']);
    }).catch(err => {
      console.log("Error al añadir usuario: ", err.message);
    })
  }

  logout(){
    this.fauth.auth.signOut();
  }

  changePassword(){
    
  }
}
