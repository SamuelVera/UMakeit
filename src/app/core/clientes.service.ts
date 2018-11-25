import { Observable, Subject } from 'rxjs';
import { Cliente } from '../clases/cliente';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesCollection: AngularFirestoreCollection<Cliente>;
  clientes: Observable<Cliente[]>;
  clienteDoc: AngularFirestoreDocument<Cliente>;

  constructor(public afs: AngularFirestore,
    ) {
      this.clientesCollection = afs.collection<Cliente>('clientes', ref => ref.orderBy('email', 'asc'));
      this.clientes = this.clientesCollection.snapshotChanges().pipe(
        map(actions => actions.map( ref => { 
          const data = ref.payload.doc.data() as Cliente
          const id = ref.payload.doc.id;
          return { id, ...data};
          }
        ))
      );
    }

    //Add new cliente
  public addCliente(cliente: Cliente){
    this.clientesCollection.add(cliente);
    console.log("Cliente added");
  }

    //Update cliente
  public updateCliente(cliente: Cliente){
    this.clienteDoc = this.afs.doc(`clientes/${cliente.id}`);
    this.clienteDoc.update(cliente);
    console.log("Cliente "+cliente.email+" updated");
  }

    //Get cliente by its email
  public getCliente(email: string){
    return this.afs.collection('clientes', ref => 
    ref.orderBy('email').startAt(email)
    ).snapshotChanges().pipe(map(actions => actions.map(ref =>{
      const data = ref.payload.doc.data() as Cliente
      const id = ref.payload.doc.id;
      return { id, ...data};
    })));
  }
  
}
