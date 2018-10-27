import { map, switchMap } from 'rxjs/operators';
import { ClientesService } from './clientes.service';
import { Observable, fromEventPattern } from 'rxjs';
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

  id = this.fauth.authState.pipe(map(
    authState => {
      if(!authState){
        return null;
      }else{
        return authState.uid
      }
    }
  ));

  constructor(private fauth: AngularFireAuth,
    private clientesService: ClientesService
    ) { 
  }

  login(email: string, password: string){
    this.fauth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log("Login succesful");
    }).catch(err => {
      console.log("Error al iniciar sesión: ",err.message);
    })
  }

    //Metódo de signup con el email y el password
  signUp(email: string, password: string, user:Cliente){
    this.fauth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log("User added");
      this.id.subscribe(data =>{
        user.id = data;
        this.clientesService.addCliente(user);
      });
    }).catch(err => {
      console.log("Error al añadir usuario: ", err.message);
    })
  }

  logout(){
    this.fauth.auth.signOut();
  }
}
