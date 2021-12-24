import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  create(resource){
    // {observe: 'response'} for full response object
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(response => response),
        catchError(this.handleError)
      )
  }

  update(resource){
    return this.http.patch(this.url + `/${resource.id}`,JSON.stringify({isRead: true}))
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  delete(id){
    // this.url=''
    return this.http.delete(this.url + `/${id}`)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      )
  }

  private handleError(error){
    if (error.status === 404)
      return throwError(new NotFoundError())
    if (error.status === 400)
      return throwError (new BadInput(error.json()))
    return throwError(new AppError(error))
  }
}
