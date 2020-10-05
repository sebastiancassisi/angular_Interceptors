import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  /*   obtenerUsuarios() {
      let params = new HttpParams().append('page', '2');
      params = params.append('nombre', 'Sebastian');
  
      const headers = new HttpHeaders({
        'token-usuario': 'ABCDEFGHIJ1234'
      });
      // https://reqres.in/api/user
      return this.http.get('https://reqres4654645.in/api/user', {
        params,
        headers
      }).pipe(
        map(res => res['data']),
        catchError(this.manejarError)
      );
  
    } */


  obtenerUsuarios() {
    // https://reqres.in/api/user
    return this.http.get('https://reqres.in/api/user').pipe(
      map(res => res['data'])
    );
  }


  manejarError(error: HttpErrorResponse) {
    console.log('Sucedio un error');
    console.warn(error);
    return throwError('Error personalizado');
  }

}
