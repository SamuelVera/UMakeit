import { Observable, of } from 'rxjs';
import { Plato } from './plato';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PlatoService {

  private _url: string = 'api/platos';

  constructor(private http: HttpClient,) { }

    //Get platos from server
  getPlatos(): Observable<Plato[]>{
    return this.http.get<Plato[]>(this._url)
      .pipe(
        tap(platos => console.log('fetched platos')),
        catchError(this.handleError('getPlatos', []))
      );
  };

  getPlato(id: number): Observable<Plato>{
    const url = `${this._url}/${id}`;
    return this.http.get<Plato>(url).pipe(
      tap(_ => console.log(`fetched plato id=${id}`)),
      catchError(this.handleError<Plato>(`getPlato id=${id}`))
    );
  }


    //Métodos de guardar, añadir y eliminar
  //Update con metodo PUT
  updatePlato(plato: Plato): Observable<any> {
    return this.http.put(this._url, plato, httpOptions).pipe(
      tap(_ => console.log(`updated plato id=${plato.id}`)),
      catchError(this.handleError<any>('updateplato'))
    );
  }

  //Guardar con el método POST
  addPlato (plato: Plato): Observable<Plato> {
    return this.http.post<Plato>(this._url, plato, httpOptions).pipe(
      tap((plato: Plato) => console.log(`added plato w/ id=${plato.id}`)),
      catchError(this.handleError<Plato>('addPlato'))
    );
  }

  //Eliminar 
  deletePlato(plato: Plato | number){
    const id = typeof plato === 'number' ? plato : plato.id;
    const url = `${this._url}/${id}`;

    return this.http.delete<Plato>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Plato>('deleteHero'))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
