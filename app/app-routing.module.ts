/**
 * Created by Radu on 1/15/2017.
 */
import { NgModule }             from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { LoginComponent }   from './login/login.component';
import { ForgotComponent }      from './login/forgot.component';
import { DashboardComponent }      from './dashboard/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  // { path: 'admin',  component: DashboardComponent ,canActivate:[CanActivateAdmin] },//TODO,
  { path: 'forgot', component: ForgotComponent } //TODO sign ap
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
