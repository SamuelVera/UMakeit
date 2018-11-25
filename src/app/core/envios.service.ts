import { Envio } from '../clases/envio';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  enviosCollection: AngularFirestoreCollection<Envio>;
  envios: Observable<Envio[]>;
  envioDoc: AngularFirestoreDocument<Envio>;

  constructor(public afs: AngularFirestore,
    ) { 
  }

  //Get envios from server
  public getEnvios(){
    this.enviosCollection = this.afs.collection<Envio>('envios', ref => ref.orderBy('fecha', 'asc'));
    this.envios = this.enviosCollection.snapshotChanges().pipe(
      map(actions => actions.map( a =>{ 
        const data = a.payload.doc.data() as Envio
        const id = a.payload.doc.id;
        data.id = id;
        return data;
        }
      ))
    );
    return this.envios;
  };

    //Get envio by its id
  public getEnvio(id: string){
    return ((this.afs.doc(`envios/${id}`).valueChanges()) as Observable<Envio>);
  }

    //Add new envio
  public addEnvio(envio: Envio){
    const wow = this.afs.createId()
    envio.id = wow;
    this.enviosCollection = this.afs.collection<Envio>('envios', ref => ref.orderBy('fecha', 'asc'));
    this.enviosCollection.doc(wow).set(envio);
    console.log("Envio added");
    return wow;
  }

    //Delete envio
  public deleteEnvio(envio: Envio){
    this.envioDoc = this.afs.doc(`envios/${envio.id}`);
    this.envioDoc.delete();
    console.log("Envio deleted");
  }

    //Update envio
  public updateEnvio(envio: Envio){
    this.envioDoc = this.afs.doc(`envios/${envio.id}`);
    this.envioDoc.update(envio);
    console.log("Envío "+envio.id+" actualizado");
  }
}
