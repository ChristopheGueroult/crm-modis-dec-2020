import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  {path: '', component: PageListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
