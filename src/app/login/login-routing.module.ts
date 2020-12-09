import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';

const routes: Routes = [
  { path: 'login', component: PageSignInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
