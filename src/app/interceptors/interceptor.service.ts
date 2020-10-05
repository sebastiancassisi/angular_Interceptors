import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Sebastian');

    const headers = new HttpHeaders({
      'token-usuario': 'ABCDEFGHIJ1234'
    });

    const reqClone = req.clone({
      headers,
      params
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error: HttpErrorResponse) {
    console.log('Sucedio un error');
    console.warn(error);
    return throwError('Error personalizado');
  }

}
