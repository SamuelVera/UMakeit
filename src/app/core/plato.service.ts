import { Observable } from 'rxjs';
import { Plato } from '../clases/plato';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class PlatoService {

  platosCollection: AngularFirestoreCollection<Plato>;
  platos: Observable<Plato[]>;
  platoDoc: AngularFirestoreDocument<Plato>;

  constructor(public afs: AngularFirestore,
    ) {
    }

    //Get platos from server
  public getPlatos(){
    console.log("Platos fetched");
    this.platosCollection = this.afs.collection<Plato>('menu', ref => ref.orderBy('nombre', 'asc'));
      this.platos = this.platosCollection.snapshotChanges().pipe(
        map(actions => actions.map( a => { 
          const data = a.payload.doc.data() as Plato
          const id = a.payload.doc.id;
          return { id, ...data};
          }
        ))
      );
    return this.platos;
  };

    //Get plato by its id
  public getPlato(id: String){
    return this.platoDoc = this.afs.doc(`menu/${id}`);
  }

    //Add new plato
  public addPlato(plato: Plato){
    this.platosCollection.add(plato);
    console.log("Plato added");
  }

    //Delete plato
  public deletePlato(plato: Plato){
    this.platoDoc = this.afs.doc(`menu/${plato.id}`);
    this.platoDoc.delete();
    console.log("Plato deleted");
  }

    //Update plato
  public updatePlato(plato: Plato){
    this.platoDoc = this.afs.doc(`menu/${plato.id}`);
    this.platoDoc.update(plato);
    console.log("Plato updated");
  }
}
