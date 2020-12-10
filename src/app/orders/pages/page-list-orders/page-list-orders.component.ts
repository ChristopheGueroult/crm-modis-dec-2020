import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public states = Object.values(StateOrder);
  // private sub!: Subscription;
  public headers!: string[];
  constructor(private os: OrdersService) {
    // this.sub = this.os.collection$.subscribe((data) => {
    //   this.collection = data;
    // });
    this.collection$ = this.os.collection$;
    this.headers = ['Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'];
  }

  ngOnInit(): void {
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((tripti) => {
      item.state = tripti.state;
    });

  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
