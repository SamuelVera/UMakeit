import { Cliente } from './../clases/cliente';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ClienteService {

  cliente: Observable<Cliente>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

      //// Get auth data, then get firestore user document || null
      this.cliente = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<Cliente>(`clientes/${user.uid}`).valueChanges()
          } else {
            return of(null)
          }
        })
      )
    }

    //Trigger de un pop up que le permite al usuario autenticarse con su cuenta de google,
    //Retorna un Promise que se resuelve con una credencial.
  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.authLogin(provider);
  }

    //Autentificación con diferentes proveedores
  private authLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`clientes/${user.uid}`);

    const data: Cliente = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      cedula: user.cedula,
      password: user.password,
      telefono: user.telefono,
      direcciones: user.direcciones,
      ordenes: user.ordenes
    }

    return userRef.set(data, { merge: true })
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }
}
