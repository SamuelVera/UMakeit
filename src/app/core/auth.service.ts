import { ClientesService } from './clientes.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Cliente } from '../clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private fbauth: AngularFireAuth,
    private clientesService: ClientesService
    ) { 
      this.user = fbauth.authState;
  }

  login(email: string, password: string){
    this.fbauth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log("Login succesful");
    }).catch(err => {
      console.log("Error al iniciar sesión: ",err.message);
    })
  }

    //Metódo de signup con el email y el password
  signUp(email: string, password: string, user:Cliente){
    this.fbauth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log("User added");
      this.clientesService.addCliente(user);
    }).catch(err => {
      console.log("Error al añadir usuario: ",err.message);
    })
  }

  getCurrentEmail(){
    return this.user;
  }

  logout(){
    this.fbauth.auth.signOut();
  }
}
