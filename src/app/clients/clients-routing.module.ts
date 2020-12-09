import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';

const routes: Routes = [
  {path: '', component: PageListClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
