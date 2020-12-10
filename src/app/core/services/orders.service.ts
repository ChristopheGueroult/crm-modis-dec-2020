import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  // property collection
  private pCollection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection$ = http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // get collection
  get collection$(): Observable<Order[]> {
    return this.pCollection$;
  }
  // set collection
  set collection$(col: Observable<Order[]>) {
    this.pCollection$ = col;
  }
  // change item state

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
