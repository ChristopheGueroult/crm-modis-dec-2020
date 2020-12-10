import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
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
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
