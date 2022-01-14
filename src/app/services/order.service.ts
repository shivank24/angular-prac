import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(){
    
    let token = localStorage.getItem('token')

    let options = {
      headers: new HttpHeaders().append('Authorization', 'Bearer ' + token),
      params: new HttpParams().append('key', 'value') // not needed in this chapter
    }

    return this.http.get('/api/orders', options)
      .pipe(
        map(response=>response)
      )
  }
}
