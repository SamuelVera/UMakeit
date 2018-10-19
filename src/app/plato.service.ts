import { Observable, of } from 'rxjs';
import { Plato } from './plato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private _url: string = "/assets/plato_data/platos.json";
  private platos = [];

  constructor(private http: HttpClient,) { }

  getPlatos(): Observable<Plato[]>{
    return this.http.get<Plato[]>(this._url);
  };

  getPlato(id: String): Observable<Plato>{
    
    this.getPlatos()
    .subscribe(data => {(this.platos = data)})
    return of(this.platos.find(plato => plato.nombre === id));
  }

}
