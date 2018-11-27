import { Router } from '@angular/router';
import { ClientesService } from './clientes.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Cliente } from '../clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    //Retrieve email
  uid: string;

  error: string = '';

  constructor(public fauth: AngularFireAuth,
    private clientesService: ClientesService,
    private router: Router
    ) { 
  }

  login(email: string, password: string){
    this.fauth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Login succesful');
      this.uid = email;
      this.error = '';
      this.clientesService.getCliente(email)
      .subscribe(data => {
        var cliente: Cliente = data[0];
        if(cliente.admin){
          this.router.navigate(['/home-admin']);
        }else{
          this.router.navigate(['/home']);
        }
      })
    }).catch(err => {
      console.log('Error al iniciar sesión: ',err.message);
      this.error = err.message;
    })
  }

    //Metódo de signup con el email y el password
  signUp(email: string, password: string, user:Cliente){
    this.fauth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('User added');
      this.error = '';
      this.clientesService.addCliente(user);
      this.router.navigate(['/home']);
    }).catch(err => {
      console.log('Error al añadir usuario: ', err.message);
      this.error = err.message;
    })
  }

  signUpAdmin(email: string, pass: string){
    this.fauth.auth.createUserWithEmailAndPassword(email, pass)
    .then(value => {
      console.log('Admin added');
      this.error = '';
      var cliente: Cliente = {
        email: email,
        admin:true
      };
      this.clientesService.addCliente(cliente);
    }).catch(err => {
      console.log('Error al añadir admin: ', err.message);
      this.error = err.message;
    })
  }

  logout(){
    this.uid = '';
    this.fauth.auth.signOut();
  }

  changePassword(newPass: string){
    this.fauth.auth.currentUser.updatePassword(newPass)
    .then(value => {
      console.log('Password changed');
      this.error = '';
    }).catch(err => {
      this.error = err.message;
    });
  }
}
